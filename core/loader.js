﻿﻿/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

/**
 * @fileOverview Defines the {@link CKEDITOR.loader} objects, which is used to
 *		load core scripts and their dependencies from _source.
 */

if ( typeof CKEDITOR == 'undefined' )
	CKEDITOR = {}; // jshint ignore:line

if ( !CKEDITOR.loader ) {
	/**
	 * Load core scripts and their dependencies from _source.
	 *
	 * @class
	 * @singleton
	 */
	CKEDITOR.loader = ( function() {
		// Table of script names and their dependencies.
		var scripts = {
			'_bootstrap': [
				'config', 'creators/inline', 'creators/themedui', 'editable', 'ckeditor', 'plugins',
				'scriptloader', 'style', 'tools',
				// The following are entries that we want to force loading at the end to avoid dependence recursion.
				'dom/comment', 'dom/elementpath', 'dom/text', 'dom/rangelist', 'skin'
			],
			'ckeditor': [
				'ckeditor_basic', 'log', 'dom', 'dtd', 'dom/document', 'dom/element', 'dom/iterator', 'editor', 'event',
				'htmldataprocessor', 'htmlparser', 'htmlparser/element', 'htmlparser/fragment', 'htmlparser/filter',
				'htmlparser/basicwriter', 'template', 'tools'
			],
			'ckeditor_base': [],
			'ckeditor_basic': [ 'editor_basic', 'env', 'event' ],
			'command': [],
			'config': [ 'ckeditor_base' ],
			'dom': [],
			'dom/comment': [ 'dom/node' ],
			'dom/document': [ 'dom/node', 'dom/window' ],
			'dom/documentfragment': [ 'dom/element' ],
			'dom/element': [ 'dom', 'dom/document', 'dom/domobject', 'dom/node', 'dom/nodelist', 'tools' ],
			'dom/elementpath': [ 'dom/element' ],
			'dom/event': [],
			'dom/iterator': [ 'dom/range' ],
			'dom/node': [ 'dom/domobject', 'tools' ],
			'dom/nodelist': [ 'dom/node' ],
			'dom/domobject': [ 'dom/event' ],
			'dom/range': [ 'dom/document', 'dom/documentfragment', 'dom/element', 'dom/walker' ],
			'dom/rangelist': [ 'dom/range' ],
			'dom/text': [ 'dom/node', 'dom/domobject' ],
			'dom/walker': [ 'dom/node' ],
			'dom/window': [ 'dom/domobject' ],
			'dtd': [ 'tools' ],
			'editable': [ 'editor', 'tools' ],
			'editor': [
				'command', 'config', 'editor_basic', 'filter', 'focusmanager', 'keystrokehandler', 'lang',
				'plugins', 'tools', 'ui'
			],
			'editor_basic': [ 'event' ],
			'env': [],
			'event': [],
			'filter': [ 'dtd', 'tools' ],
			'focusmanager': [],
			'htmldataprocessor': [ 'htmlparser', 'htmlparser/basicwriter', 'htmlparser/fragment', 'htmlparser/filter' ],
			'htmlparser': [],
			'htmlparser/comment': [ 'htmlparser', 'htmlparser/node' ],
			'htmlparser/element': [ 'htmlparser', 'htmlparser/fragment', 'htmlparser/node' ],
			'htmlparser/fragment': [ 'htmlparser', 'htmlparser/comment', 'htmlparser/text', 'htmlparser/cdata' ],
			'htmlparser/text': [ 'htmlparser', 'htmlparser/node' ],
			'htmlparser/cdata': [ 'htmlparser', 'htmlparser/node' ],
			'htmlparser/filter': [ 'htmlparser' ],
			'htmlparser/basicwriter': [ 'htmlparser' ],
			'htmlparser/node': [ 'htmlparser' ],
			'keystrokehandler': [ 'event' ],
			'lang': [],
			'log': [ 'ckeditor_basic' ],
			'plugins': [ 'resourcemanager' ],
			'resourcemanager': [ 'scriptloader', 'tools' ],
			'scriptloader': [ 'dom/element', 'env' ],
			'selection': [ 'dom/range', 'dom/walker' ],
			'skin': [],
			'style': [ 'selection' ],
			'template': [],
			'tools': [ 'env' ],
			'ui': [],
			'creators/themedui': [],
			'creators/inline': []
		};

		// The production implementation contains a fixed timestamp generated by the releaser.
		var timestamp = '%TIMESTAMP%';
		// The development implementation contains a current timestamp.					// %REMOVE_LINE%
		timestamp = ( CKEDITOR && CKEDITOR.timestamp ) || ( new Date() ).valueOf();		// %REMOVE_LINE%

		var getUrl = function( resource ) {
				if ( CKEDITOR && CKEDITOR.getUrl )
					return CKEDITOR.getUrl( resource );

				return CKEDITOR.basePath + resource + ( resource.indexOf( '?' ) >= 0 ? '&' : '?' ) + 't=' + timestamp;
			};

		var pendingLoad = [];

		return {
			/**
			 * The list of loaded scripts in their loading order.
			 *
			 *		// Alert the loaded script names.
			 *		alert( CKEDITOR.loader.loadedScripts );
			 */
			loadedScripts: [],
			/**
			 * Table of script names and their dependencies.
			 *
			 * @property {Array}
			 */
			scripts: scripts,

			/**
			 * @todo
			 */
			loadPending: function() {
				var scriptName = pendingLoad.shift();

				if ( !scriptName )
					return;

				var scriptSrc = getUrl( 'core/' + scriptName + '.js' );

				var script = document.createElement( 'script' );
				script.type = 'text/javascript';
				script.src = scriptSrc;

				function onScriptLoaded() {
					// Append this script to the list of loaded scripts.
					CKEDITOR.loader.loadedScripts.push( scriptName );

					// Load the next.
					CKEDITOR.loader.loadPending();
				}

				// We must guarantee the execution order of the scripts, so we
				// need to load them one by one. (#4145)
				// The following if/else block has been taken from the scriptloader core code.
				if ( typeof script.onreadystatechange !== 'undefined' ) {
					/** @ignore */
					script.onreadystatechange = function() {
						if ( script.readyState == 'loaded' || script.readyState == 'complete' ) {
							script.onreadystatechange = null;
							onScriptLoaded();
						}
					};
				} else {
					/** @ignore */
					script.onload = function() {
						// Some browsers, such as Safari, may call the onLoad function
						// immediately. Which will break the loading sequence. (#3661)
						setTimeout( function() {
							onScriptLoaded( scriptName );
						}, 0 );
					};
				}

				document.body.appendChild( script );
			},

			/**
			 * Loads a specific script, including its dependencies. This is not a
			 * synchronous loading, which means that the code to be loaded will
			 * not necessarily be available after this call.
			 *
			 *		CKEDITOR.loader.load( 'dom/element' );
			 *
			 * @param {String} scriptName
			 * @param {Boolean} [defer=false]
			 * @todo params
			 */
			load: function( scriptName, defer ) {
				// Check if the script has already been loaded.
				if ( ( 's:' + scriptName ) in this.loadedScripts )
					return;

				// Get the script dependencies list.
				var dependencies = scripts[ scriptName ];
				if ( !dependencies )
					throw 'The script name"' + scriptName + '" is not defined.';

				// Mark the script as loaded, even before really loading it, to
				// avoid cross references recursion.
				// Prepend script name with 's:' to avoid conflict with Array's methods.
				this.loadedScripts[ 's:' + scriptName ] = true;

				// Load all dependencies first.
				for ( var i = 0; i < dependencies.length; i++ )
					this.load( dependencies[ i ], true );

				var scriptSrc = getUrl( 'core/' + scriptName + '.js' );

				// Append the <script> element to the DOM.
				// If the page is fully loaded, we can't use document.write
				// but if the script is run while the body is loading then it's safe to use it
				// Unfortunately, Firefox <3.6 doesn't support document.readyState, so it won't get this improvement
				if ( document.body && ( !document.readyState || document.readyState == 'complete' ) ) {
					pendingLoad.push( scriptName );

					if ( !defer )
						this.loadPending();
				} else {
					// Append this script to the list of loaded scripts.
					this.loadedScripts.push( scriptName );

					document.write( '<script src="' + scriptSrc + '" type="text/javascript"><\/script>' );
				}
			}
		};
	} )();
}

// Check if any script has been defined for autoload.
if ( CKEDITOR._autoLoad ) {
	CKEDITOR.loader.load( CKEDITOR._autoLoad );
	delete CKEDITOR._autoLoad;
}
