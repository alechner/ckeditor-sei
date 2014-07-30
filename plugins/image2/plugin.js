/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

'use strict';

( function() {

	var template = '<img alt="" src="" />',
<<<<<<< HEAD
		templateBlock = '<figure class="caption">' +
				template +
				'<figcaption>Caption</figcaption>' +
			'</figure>',
		regexPercent = /^\s*(\d+\%)\s*$/i;

	CKEDITOR.plugins.add( 'image2', {
		lang: 'af,ar,bg,bn,bs,ca,cs,cy,da,de,el,en,en-au,en-ca,en-gb,eo,es,et,eu,fa,fi,fo,fr,fr-ca,gl,gu,he,hi,hr,hu,id,is,it,ja,ka,km,ko,ku,lt,lv,mk,mn,ms,nb,nl,no,pl,pt,pt-br,ro,ru,si,sk,sl,sq,sr,sr-latn,sv,th,tr,ug,uk,vi,zh,zh-cn', // %REMOVE_LINE_CORE%
=======
		templateBlock = new CKEDITOR.template(
			'<figure class="{captionedClass}">' +
				template +
				'<figcaption>{captionPlaceholder}</figcaption>' +
			'</figure>' ),
		alignmentsArr = [ 'left', 'center', 'right' ],
		alignmentsObj = { left: 0, center: 1, right: 2 },
		regexPercent = /^\s*(\d+\%)\s*$/i;

	CKEDITOR.plugins.add( 'image2', {
		lang: 'af,ar,bg,bn,bs,ca,cs,cy,da,de,el,en,en-au,en-ca,en-gb,eo,es,et,eu,fa,fi,fo,fr,fr-ca,gl,gu,he,hi,hr,hu,id,is,it,ja,ka,km,ko,ku,lt,lv,mk,mn,ms,nb,nl,no,pl,pt,pt-br,ro,ru,si,sk,sl,sq,sr,sr-latn,sv,th,tr,tt,ug,uk,vi,zh,zh-cn', // %REMOVE_LINE_CORE%
>>>>>>> fd4f17ce11eb398e844c9056c0e25087492a122b
		requires: 'widget,dialog',
		icons: 'image',
		hidpi: true,

<<<<<<< HEAD
		onLoad: function( editor ) {
			CKEDITOR.addCss(
=======
		onLoad: function() {
			CKEDITOR.addCss(
			'.cke_image_nocaption{' +
				// This is to remove unwanted space so resize
				// wrapper is displayed property.
				'line-height:0' +
			'}' +
>>>>>>> fd4f17ce11eb398e844c9056c0e25087492a122b
			'.cke_editable.cke_image_sw, .cke_editable.cke_image_sw *{cursor:sw-resize !important}' +
			'.cke_editable.cke_image_se, .cke_editable.cke_image_se *{cursor:se-resize !important}' +
			'.cke_image_resizer{' +
				'display:none;' +
				'position:absolute;' +
				'width:10px;' +
				'height:10px;' +
				'bottom:-5px;' +
				'right:-5px;' +
				'background:#000;' +
				'outline:1px solid #fff;' +
				// Prevent drag handler from being misplaced (#11207).
				'line-height:0;' +
				'cursor:se-resize;' +
			'}' +
			'.cke_image_resizer_wrapper{' +
				'position:relative;' +
				'display:inline-block;' +
				'line-height:0;' +
			'}' +
			// Bottom-left corner style of the resizer.
			'.cke_image_resizer.cke_image_resizer_left{' +
				'right:auto;' +
				'left:-5px;' +
				'cursor:sw-resize;' +
			'}' +
			'.cke_widget_wrapper:hover .cke_image_resizer,' +
			'.cke_image_resizer.cke_image_resizing{' +
				'display:block' +
<<<<<<< HEAD
=======
			'}' +
			// Expand widget wrapper when linked inline image.
			'.cke_widget_wrapper>a{' +
				'display:inline-block' +
>>>>>>> fd4f17ce11eb398e844c9056c0e25087492a122b
			'}' );
		},

		init: function( editor ) {
			// Adapts configuration from original image plugin. Should be removed
			// when we'll rename image2 to image.
			var config = editor.config,
				lang = editor.lang.image2,
				image = widgetDef( editor );

			// Since filebrowser plugin discovers config properties by dialog (plugin?)
			// names (sic!), this hack will be necessary as long as Image2 is not named
			// Image. And since Image2 will never be Image, for sure some filebrowser logic
			// got to be refined.
			config.filebrowserImage2BrowseUrl = config.filebrowserImageBrowseUrl;
			config.filebrowserImage2UploadUrl = config.filebrowserImageUploadUrl;

			// Add custom elementspath names to widget definition.
			image.pathName = lang.pathName;
			image.editables.caption.pathName = lang.pathNameCaption;

			// Register the widget.
			editor.widgets.add( 'image', image );

			// Add toolbar button for this plugin.
			editor.ui.addButton && editor.ui.addButton( 'Image', {
				label: editor.lang.common.image,
				command: 'image',
				toolbar: 'insert,10'
			} );

			// Register context menu option for editing widget.
			if ( editor.contextMenu ) {
				editor.addMenuGroup( 'image', 10 );

				editor.addMenuItem( 'image', {
					label: lang.menu,
					command: 'image',
					group: 'image'
				} );
			}

			CKEDITOR.dialog.add( 'image2', this.path + 'dialogs/image2.js' );
		},

		afterInit: function( editor ) {
<<<<<<< HEAD
=======
			// Integrate with align commands (justify plugin).
>>>>>>> fd4f17ce11eb398e844c9056c0e25087492a122b
			var align = { left: 1, right: 1, center: 1, block: 1 },
				integrate = alignCommandIntegrator( editor );

			for ( var value in align )
				integrate( value );
<<<<<<< HEAD
		}
	} );

	// @param {CKEDITOR.editor}
	// @returns {Object}
	function widgetDef( editor ) {
		return {
			// Widget-specific rules for Allowed Content Filter.
			allowedContent: {
				// This widget may need <div> centering wrapper.
				div: {
					match: centerWrapperChecker( editor ),
					styles: 'text-align'
				},
				figcaption: true,
				figure: {
					classes: '!caption',
					styles: 'float,display'
				},
				img: {
					attributes: '!src,alt,width,height',
					styles: 'float'
				},
				// This widget may need <p> centering wrapper.
				p: {
					match: centerWrapperChecker( editor ),
					styles: 'text-align'
				}
			},
=======

			// Integrate with link commands (link plugin).
			linkCommandIntegrator( editor );
		}
	} );

	// Wiget states (forms) depending on alignment and configuration.
	//
	// Non-captioned widget (inline styles)
	// 		┌──────┬───────────────────────────────┬─────────────────────────────┐
	// 		│Align │Internal form                  │Data                         │
	// 		├──────┼───────────────────────────────┼─────────────────────────────┤
	// 		│none  │<wrapper>                      │<img />                      │
	// 		│      │ <img />                       │                             │
	// 		│      │</wrapper>                     │                             │
	// 		├──────┼───────────────────────────────┼─────────────────────────────┤
	// 		│left  │<wrapper style=”float:left”>   │<img style=”float:left” />   │
	// 		│      │ <img />                       │                             │
	// 		│      │</wrapper>                     │                             │
	// 		├──────┼───────────────────────────────┼─────────────────────────────┤
	// 		│center│<wrapper>                      │<p style=”text-align:center”>│
	// 		│      │ <p style=”text-align:center”> │  <img />                    │
	// 		│      │   <img />                     │</p>                         │
	// 		│      │ </p>                          │                             │
	// 		│      │</wrapper>                     │                             │
	// 		├──────┼───────────────────────────────┼─────────────────────────────┤
	// 		│right │<wrapper style=”float:right”>  │<img style=”float:right” />  │
	// 		│      │ <img />                       │                             │
	// 		│      │</wrapper>                     │                             │
	// 		└──────┴───────────────────────────────┴─────────────────────────────┘
	//
	// Non-captioned widget (config.image2_alignClasses defined)
	// 		┌──────┬───────────────────────────────┬─────────────────────────────┐
	// 		│Align │Internal form                  │Data                         │
	// 		├──────┼───────────────────────────────┼─────────────────────────────┤
	// 		│none  │<wrapper>                      │<img />                      │
	// 		│      │ <img />                       │                             │
	// 		│      │</wrapper>                     │                             │
	// 		├──────┼───────────────────────────────┼─────────────────────────────┤
	// 		│left  │<wrapper class=”left”>         │<img class=”left” />         │
	// 		│      │ <img />                       │                             │
	// 		│      │</wrapper>                     │                             │
	// 		├──────┼───────────────────────────────┼─────────────────────────────┤
	// 		│center│<wrapper>                      │<p class=”center”>           │
	// 		│      │ <p class=”center”>            │ <img />                     │
	// 		│      │   <img />                     │</p>                         │
	// 		│      │ </p>                          │                             │
	// 		│      │</wrapper>                     │                             │
	// 		├──────┼───────────────────────────────┼─────────────────────────────┤
	// 		│right │<wrapper class=”right”>        │<img class=”right” />        │
	// 		│      │ <img />                       │                             │
	// 		│      │</wrapper>                     │                             │
	// 		└──────┴───────────────────────────────┴─────────────────────────────┘
	//
	// Captioned widget (inline styles)
	// 		┌──────┬────────────────────────────────────────┬────────────────────────────────────────┐
	// 		│Align │Internal form                           │Data                                    │
	// 		├──────┼────────────────────────────────────────┼────────────────────────────────────────┤
	// 		│none  │<wrapper>                               │<figure />                              │
	// 		│      │ <figure />                             │                                        │
	// 		│      │</wrapper>                              │                                        │
	// 		├──────┼────────────────────────────────────────┼────────────────────────────────────────┤
	// 		│left  │<wrapper style=”float:left”>            │<figure style=”float:left” />           │
	// 		│      │ <figure />                             │                                        │
	// 		│      │</wrapper>                              │                                        │
	// 		├──────┼────────────────────────────────────────┼────────────────────────────────────────┤
	// 		│center│<wrapper style=”text-align:center”>     │<div style=”text-align:center”>         │
	// 		│      │ <figure style=”display:inline-block” />│ <figure style=”display:inline-block” />│
	// 		│      │</wrapper>                              │</p>                                    │
	// 		├──────┼────────────────────────────────────────┼────────────────────────────────────────┤
	// 		│right │<wrapper style=”float:right”>           │<figure style=”float:right” />          │
	// 		│      │ <figure />                             │                                        │
	// 		│      │</wrapper>                              │                                        │
	// 		└──────┴────────────────────────────────────────┴────────────────────────────────────────┘
	//
	// Captioned widget (config.image2_alignClasses defined)
	// 		┌──────┬────────────────────────────────────────┬────────────────────────────────────────┐
	// 		│Align │Internal form                           │Data                                    │
	// 		├──────┼────────────────────────────────────────┼────────────────────────────────────────┤
	// 		│none  │<wrapper>                               │<figure />                              │
	// 		│      │ <figure />                             │                                        │
	// 		│      │</wrapper>                              │                                        │
	// 		├──────┼────────────────────────────────────────┼────────────────────────────────────────┤
	// 		│left  │<wrapper class=”left”>                  │<figure class=”left” />                 │
	// 		│      │ <figure />                             │                                        │
	// 		│      │</wrapper>                              │                                        │
	// 		├──────┼────────────────────────────────────────┼────────────────────────────────────────┤
	// 		│center│<wrapper class=”center”>                │<div class=”center”>                    │
	// 		│      │ <figure />                             │ <figure />                             │
	// 		│      │</wrapper>                              │</p>                                    │
	// 		├──────┼────────────────────────────────────────┼────────────────────────────────────────┤
	// 		│right │<wrapper class=”right”>                 │<figure class=”right” />                │
	// 		│      │ <figure />                             │                                        │
	// 		│      │</wrapper>                              │                                        │
	// 		└──────┴────────────────────────────────────────┴────────────────────────────────────────┘
	//
	// @param {CKEDITOR.editor}
	// @returns {Object}
	function widgetDef( editor ) {
		var alignClasses = editor.config.image2_alignClasses,
			captionedClass = editor.config.image2_captionedClass;

		function deflate() {
			if ( this.deflated )
				return;

			// Remember whether widget was focused before destroyed.
			if ( editor.widgets.focused == this.widget )
				this.focused = true;

			editor.widgets.destroy( this.widget );

			// Mark widget was destroyed.
			this.deflated = true;
		}

		function inflate() {
			var editable = editor.editable(),
			doc = editor.document;

			// Create a new widget. This widget will be either captioned
			// non-captioned, block or inline according to what is the
			// new state of the widget.
			if ( this.deflated ) {
				this.widget = editor.widgets.initOn( this.element, 'image', this.widget.data );

				// Once widget was re-created, it may become an inline element without
				// block wrapper (i.e. when unaligned, end not captioned). Let's do some
				// sort of autoparagraphing here (#10853).
				if ( this.widget.inline && !( new CKEDITOR.dom.elementPath( this.widget.wrapper, editable ).block ) ) {
					var block = doc.createElement( editor.activeEnterMode == CKEDITOR.ENTER_P ? 'p' : 'div' );
					block.replace( this.widget.wrapper );
					this.widget.wrapper.move( block );
				}

				// The focus must be transferred from the old one (destroyed)
				// to the new one (just created).
				if ( this.focused ) {
					this.widget.focus();
					delete this.focused;
				}

				delete this.deflated;
			}

			// If now widget was destroyed just update wrapper's alignment.
			// According to the new state.
			else
				setWrapperAlign( this.widget, alignClasses );
		}

		return {
			allowedContent: getWidgetAllowedContent( editor ),

			requiredContent: 'img[src,alt]',

			features: getWidgetFeatures( editor ),

			styleableElements: 'img figure',
>>>>>>> fd4f17ce11eb398e844c9056c0e25087492a122b

			// This widget converts style-driven dimensions to attributes.
			contentTransformations: [
				[ 'img[width]: sizeToAttribute' ]
			],

			// This widget has an editable caption.
			editables: {
				caption: {
					selector: 'figcaption',
					allowedContent: 'br em strong sub sup u s; a[!href]'
				}
			},

			parts: {
				image: 'img',
				caption: 'figcaption'
<<<<<<< HEAD
=======
				// parts#link defined in widget#init
>>>>>>> fd4f17ce11eb398e844c9056c0e25087492a122b
			},

			// The name of this widget's dialog.
			dialog: 'image2',

			// Template of the widget: plain image.
			template: template,

			data: function() {
<<<<<<< HEAD
				var widget = this,
					editor = widget.editor,
					doc = editor.document,
					editable = editor.editable(),
					oldState = widget.oldData,
					newState = widget.data;

				// Convert the internal form of the widget from the old state to the new one.
				widget.shiftState( {
					element: widget.element,
					oldState: oldState,
					newState: newState,

					// Destroy the widget.
					destroy: function() {
						if ( this.destroyed )
							return;

						// Remember whether widget was focused before destroyed.
						if ( editor.widgets.focused == widget )
							this.focused = true;

						editor.widgets.destroy( widget );

						// Mark widget was destroyed.
						this.destroyed = true;
					},

					init: function( element ) {
						// Create a new widget. This widget will be either captioned
						// non-captioned, block or inline according to what is the
						// new state of the widget.
						if ( this.destroyed ) {
							widget = editor.widgets.initOn( element, 'image', widget.data );

							// Once widget was re-created, it may become an inline element without
							// block wrapper (i.e. when unaligned, end not captioned). Let's do some
							// sort of autoparagraphing here (#10853).
							if ( widget.inline && !( new CKEDITOR.dom.elementPath( widget.wrapper, editable ).block ) ) {
								var block = doc.createElement( editor.activeEnterMode == CKEDITOR.ENTER_P ? 'p' : 'div' );
								block.replace( widget.wrapper );
								widget.wrapper.move( block );
							}

							// The focus must be transferred from the old one (destroyed)
							// to the new one (just created).
							if ( this.focused ) {
								widget.focus();
								delete this.focused;
							}

							delete this.destroyed;
						}

						// If now widget was destroyed just update wrapper's alignment.
						// According to the new state.
						else
							setWrapperAlign( widget );

					}
				} );

				widget.parts.image.setAttributes( {
					src: widget.data.src,

					// This internal is required by the editor.
					'data-cke-saved-src': widget.data.src,

					alt: widget.data.alt
				} );

				// Set dimensions of the image according to gathered data.
				setDimensions( widget );

				// Cache current data.
				widget.oldData = CKEDITOR.tools.extend( {}, widget.data );
=======
				var features = this.features;

				// Image can't be captioned when figcaption is disallowed (#11004).
				if ( this.data.hasCaption && !editor.filter.checkFeature( features.caption ) )
					this.data.hasCaption = false;

				// Image can't be aligned when floating is disallowed (#11004).
				if ( this.data.align != 'none' && !editor.filter.checkFeature( features.align ) )
					this.data.align = 'none';

				// Convert the internal form of the widget from the old state to the new one.
				this.shiftState( {
					widget: this,
					element: this.element,
					oldData: this.oldData,
					newData: this.data,
					deflate: deflate,
					inflate: inflate
				} );

				// Update widget.parts.link since it will not auto-update unless widget
				// is destroyed and re-inited.
				if ( !this.data.link ) {
					if ( this.parts.link )
						delete this.parts.link;
				} else {
					if ( !this.parts.link )
						this.parts.link = this.parts.image.getParent();
				}

				this.parts.image.setAttributes( {
					src: this.data.src,

					// This internal is required by the editor.
					'data-cke-saved-src': this.data.src,

					alt: this.data.alt
				} );

				// If shifting non-captioned -> captioned, remove classes
				// related to styles from <img/>.
				if ( this.oldData && !this.oldData.hasCaption && this.data.hasCaption ) {
					for ( var c in this.data.classes )
						this.parts.image.removeClass( c );
				}

				// Set dimensions of the image according to gathered data.
				// Do it only when the attributes are allowed (#11004).
				if ( editor.filter.checkFeature( features.dimension ) )
					setDimensions( this );

				// Cache current data.
				this.oldData = CKEDITOR.tools.extend( {}, this.data );
>>>>>>> fd4f17ce11eb398e844c9056c0e25087492a122b
			},

			init: function() {
				var helpers = CKEDITOR.plugins.image2,
					image = this.parts.image,
					data = {
						hasCaption: !!this.parts.caption,
						src: image.getAttribute( 'src' ),
						alt: image.getAttribute( 'alt' ) || '',
						width: image.getAttribute( 'width' ) || '',
						height: image.getAttribute( 'height' ) || '',

						// Lock ratio is on by default (#10833).
						lock: this.ready ? helpers.checkHasNaturalRatio( image ) : true
					};

<<<<<<< HEAD
				// Read initial float style from figure/image and
				// then remove it. This style will be set on wrapper in #data listener.
				if ( !data.align ) {
					data.align = this.element.getStyle( 'float' ) || image.getStyle( 'float' ) || 'none';
					this.element.removeStyle( 'float' );
					image.removeStyle( 'float' );
=======
				// If we used 'a' in widget#parts definition, it could happen that
				// selected element is a child of widget.parts#caption. Since there's no clever
				// way to solve it with CSS selectors, it's done like that. (#11783).
				var link = image.getAscendant( 'a' );

				if ( link && this.wrapper.contains( link ) )
					this.parts.link = link;

				// Depending on configuration, read style/class from element and
				// then remove it. Removed style/class will be set on wrapper in #data listener.
				// Note: Center alignment is detected during upcast, so only left/right cases
				// are checked below.
				if ( !data.align ) {
					// Read the initial left/right alignment from the class set on element.
					if ( alignClasses ) {
						if ( this.element.hasClass( alignClasses[ 0 ] ) )
							data.align = 'left';
						else if ( this.element.hasClass( alignClasses[ 2 ] ) )
							data.align = 'right';

						if ( data.align )
							this.element.removeClass( alignClasses[ alignmentsObj[ data.align ] ] );
						else
							data.align = 'none';
					}
					// Read initial float style from figure/image and then remove it.
					else {
						data.align = this.element.getStyle( 'float' ) || image.getStyle( 'float' ) || 'none';
						this.element.removeStyle( 'float' );
						image.removeStyle( 'float' );
					}
				}

				// Update data.link object with attributes if the link has been discovered.
				if ( editor.plugins.link && this.parts.link ) {
					data.link = CKEDITOR.plugins.link.parseLinkAttributes( editor, this.parts.link );

					// Get rid of cke_widget_* classes in data. Otherwise
					// they might appear in link dialog.
					var advanced = data.link.advanced;
					if ( advanced && advanced.advCSSClasses )
						advanced.advCSSClasses = CKEDITOR.tools.trim( advanced.advCSSClasses.replace( /cke_\S+/, '' ) );
>>>>>>> fd4f17ce11eb398e844c9056c0e25087492a122b
				}

				// Get rid of extra vertical space when there's no caption.
				// It will improve the look of the resizer.
<<<<<<< HEAD
				if ( !data.hasCaption )
					this.wrapper.setStyle( 'line-height', '0' );
=======
				this.wrapper[ ( data.hasCaption ? 'remove' : 'add' ) + 'Class' ]( 'cke_image_nocaption' );
>>>>>>> fd4f17ce11eb398e844c9056c0e25087492a122b

				this.setData( data );

				// Setup dynamic image resizing with mouse.
<<<<<<< HEAD
				setupResizer( this );
=======
				// Don't initialize resizer when dimensions are disallowed (#11004).
				if ( editor.filter.checkFeature( this.features.dimension ) )
					setupResizer( this );
>>>>>>> fd4f17ce11eb398e844c9056c0e25087492a122b

				this.shiftState = helpers.stateShifter( this.editor );

				// Add widget editing option to its context menu.
				this.on( 'contextMenu', function( evt ) {
					evt.data.image = CKEDITOR.TRISTATE_OFF;
<<<<<<< HEAD
=======

					// Integrate context menu items for link.
					// Note that widget may be wrapped in a link, which
					// does not belong to that widget (#11814).
					if ( this.parts.link || this.wrapper.getAscendant( 'a' ) )
						evt.data.link = evt.data.unlink = CKEDITOR.TRISTATE_OFF;
>>>>>>> fd4f17ce11eb398e844c9056c0e25087492a122b
				} );

				// Pass the reference to this widget to the dialog.
				this.on( 'dialog', function( evt ) {
					evt.data.widget = this;
				}, this );
			},

<<<<<<< HEAD
			upcast: upcastWidgetElement( editor ),
			downcast: downcastWidgetElement
=======
			// Overrides default method to handle internal mutability of Image2.
			// @see CKEDITOR.plugins.widget#addClass
			addClass: function( className ) {
				getStyleableElement( this ).addClass( className );
			},

			// Overrides default method to handle internal mutability of Image2.
			// @see CKEDITOR.plugins.widget#hasClass
			hasClass: function( className ) {
				return getStyleableElement( this ).hasClass( className );
			},

			// Overrides default method to handle internal mutability of Image2.
			// @see CKEDITOR.plugins.widget#removeClass
			removeClass: function( className ) {
				getStyleableElement( this ).removeClass( className );
			},

			// Overrides default method to handle internal mutability of Image2.
			// @see CKEDITOR.plugins.widget#getClasses
			getClasses: ( function() {
				var classRegex = new RegExp( '^(' + [].concat( captionedClass, alignClasses ).join( '|' ) + ')$' );

				return function() {
					var classes = this.repository.parseElementClasses( getStyleableElement( this ).getAttribute( 'class' ) );

					// Neither config.image2_captionedClass nor config.image2_alignClasses
					// do not belong to style classes.
					for ( var c in classes ) {
						if ( classRegex.test( c ) )
							delete classes[ c ];
					}

					return classes;
				};
			} )(),

			upcast: upcastWidgetElement( editor ),
			downcast: downcastWidgetElement( editor )
>>>>>>> fd4f17ce11eb398e844c9056c0e25087492a122b
		};
	}

	CKEDITOR.plugins.image2 = {
		stateShifter: function( editor ) {
			// Tag name used for centering non-captioned widgets.
			var doc = editor.document,
<<<<<<< HEAD
				editable = editor.editable(),

				// The order that stateActions get executed. It matters!
				shiftables = [ 'hasCaption', 'align' ],

				// Atomic procedures, one per state variable.
				stateActions = {
					align: function( data, oldValue, newValue ) {
						var hasCaptionAfter = data.newState.hasCaption,
							element = data.element;

						// Alignment changed.
						if ( changed( data, 'align' ) ) {
							// No caption in the new state.
							if ( !hasCaptionAfter ) {
								// Changed to "center" (non-captioned).
								if ( newValue == 'center' ) {
									data.destroy();
									data.element = wrapInCentering( editor, element );
								}

								// Changed to "non-center" from "center" while caption removed.
								if ( !changed( data, 'hasCaption' ) && oldValue == 'center' && newValue != 'center' ) {
									data.destroy();
									data.element = unwrapFromCentering( element );
								}
							}
						}

						// Alignment remains and "center" removed caption.
						else if ( newValue == 'center' && changed( data, 'hasCaption' ) && !hasCaptionAfter ) {
							data.destroy();
							data.element = wrapInCentering( editor, element );
						}

						// Finally set display for figure.
						if ( element.is( 'figure' ) ) {
							if ( newValue == 'center' )
								element.setStyle( 'display', 'inline-block' );
							else
								element.removeStyle( 'display' );
						}
					},

					hasCaption:	function( data, oldValue, newValue ) {
						// This action is for real state change only.
						if ( !changed( data, 'hasCaption' ) )
							return;

						var element = data.element,
							oldState = data.oldState,
							newState = data.newState,
							img;

						// Switching hasCaption always destroys the widget.
						data.destroy();

						// There was no caption, but the caption is to be added.
						if ( newValue ) {
							// Get <img> from element. As element may be either
							// <img> or centering <p>, consider it now.
							img = element.findOne( 'img' ) || element;

							// Create new <figure> from widget template.
							var figure = CKEDITOR.dom.element.createFromHtml( templateBlock, doc );

							// Replace element with <figure>.
							replaceSafely( figure, element );

							// Use old <img> instead of the one from the template,
							// so we won't lose additional attributes.
							img.replace( figure.findOne( 'img' ) );

							// Update widget's element.
							data.element = figure;
						}

						// The caption was present, but now it's to be removed.
						else {
							// Unwrap <img> from figure.
							img = element.findOne( 'img' );
							img.replace( element );

							// Update widget's element.
							data.element = img;
						}
					}
				};

			function getValue( state, name ) {
				return state && state[ name ] !== undefined ? state[ name ] : null;
			}

			function changed( data, name ) {
				if ( !data.oldState )
					return false;
				else
					return data.oldState[ name ] !== data.newState[ name ];
			}

			function wrapInCentering( editor, element ) {
				// When widget gets centered. Wrapper must be created.
				// Create new <p|div> with text-align:center.
				var center = doc.createElement( editor.activeEnterMode == CKEDITOR.ENTER_P ? 'p' : 'div', {
					styles: { 'text-align': 'center' }
				} );
=======
				alignClasses = editor.config.image2_alignClasses,
				captionedClass = editor.config.image2_captionedClass,
				editable = editor.editable(),

				// The order that stateActions get executed. It matters!
				shiftables = [ 'hasCaption', 'align', 'link' ];

			// Atomic procedures, one per state variable.
			var stateActions = {
				align: function( shift, oldValue, newValue ) {
					var el = shift.element;

					// Alignment changed.
					if ( shift.changed.align ) {
						// No caption in the new state.
						if ( !shift.newData.hasCaption ) {
							// Changed to "center" (non-captioned).
							if ( newValue == 'center' ) {
								shift.deflate();
								shift.element = wrapInCentering( editor, el );
							}

							// Changed to "non-center" from "center" while caption removed.
							if ( !shift.changed.hasCaption && oldValue == 'center' && newValue != 'center' ) {
								shift.deflate();
								shift.element = unwrapFromCentering( el );
							}
						}
					}

					// Alignment remains and "center" removed caption.
					else if ( newValue == 'center' && shift.changed.hasCaption && !shift.newData.hasCaption ) {
						shift.deflate();
						shift.element = wrapInCentering( editor, el );
					}

					// Finally set display for figure.
					if ( !alignClasses && el.is( 'figure' ) ) {
						if ( newValue == 'center' )
							el.setStyle( 'display', 'inline-block' );
						else
							el.removeStyle( 'display' );
					}
				},

				hasCaption:	function( shift, oldValue, newValue ) {
					// This action is for real state change only.
					if ( !shift.changed.hasCaption )
						return;

					// Get <img/> or <a><img/></a> from widget. Note that widget element might itself
					// be what we're looking for. Also element can be <p style="text-align:center"><a>...</a></p>.
					var imageOrLink;
					if ( shift.element.is( { img: 1, a: 1 } ) )
						imageOrLink = shift.element;
					else
						imageOrLink =  shift.element.findOne( 'a,img' );

					// Switching hasCaption always destroys the widget.
					shift.deflate();

					// There was no caption, but the caption is to be added.
					if ( newValue ) {
						// Create new <figure> from widget template.
						var figure = CKEDITOR.dom.element.createFromHtml( templateBlock.output( {
							captionedClass: captionedClass,
							captionPlaceholder: editor.lang.image2.captionPlaceholder
						} ), doc );

						// Replace element with <figure>.
						replaceSafely( figure, shift.element );

						// Use old <img/> or <a><img/></a> instead of the one from the template,
						// so we won't lose additional attributes.
						imageOrLink.replace( figure.findOne( 'img' ) );

						// Update widget's element.
						shift.element = figure;
					}

					// The caption was present, but now it's to be removed.
					else {
						// Unwrap <img/> or <a><img/></a> from figure.
						imageOrLink.replace( shift.element );

						// Update widget's element.
						shift.element = imageOrLink;
					}
				},

				link: function( shift, oldValue, newValue ) {
					if ( shift.changed.link ) {
						var img = shift.element.is( 'img' ) ?
								shift.element : shift.element.findOne( 'img' ),
							link = shift.element.is( 'a' ) ?
								shift.element : shift.element.findOne( 'a' ),
							// Why deflate:
							// If element is <img/>, it will be wrapped into <a>,
							// which becomes a new widget.element.
							// If element is <a><img/></a>, it will be unlinked
							// so <img/> becomes a new widget.element.
							needsDeflate = ( shift.element.is( 'a' ) && !newValue ) || ( shift.element.is( 'img' ) && newValue ),
							newEl;

						if ( needsDeflate )
							shift.deflate();

						// If unlinked the image, returned element is <img>.
						if ( !newValue )
							newEl = unwrapFromLink( link );
						else {
							// If linked the image, returned element is <a>.
							if ( !oldValue )
								newEl = wrapInLink( img, shift.newData.link );

							// Set and remove all attributes associated with this state.
							var attributes = CKEDITOR.plugins.link.getLinkAttributes( editor, newValue );

							if ( !CKEDITOR.tools.isEmpty( attributes.set ) )
								( newEl || link ).setAttributes( attributes.set );

							if ( attributes.removed.length )
								( newEl || link ).removeAttributes( attributes.removed );
						}

						if ( needsDeflate )
							shift.element = newEl;
					}
				}
			};

			function wrapInCentering( editor, element ) {
				var attribsAndStyles = {};

				if ( alignClasses )
					attribsAndStyles.attributes = { 'class': alignClasses[ 1 ] };
				else
					attribsAndStyles.styles = { 'text-align': 'center' };

				// There's no gentle way to center inline element with CSS, so create p/div
				// that wraps widget contents and does the trick either with style or class.
				var center = doc.createElement(
					editor.activeEnterMode == CKEDITOR.ENTER_P ? 'p' : 'div', attribsAndStyles );
>>>>>>> fd4f17ce11eb398e844c9056c0e25087492a122b

				// Replace element with centering wrapper.
				replaceSafely( center, element );
				element.move( center );

				return center;
			}

			function unwrapFromCentering( element ) {
<<<<<<< HEAD
				var img = element.findOne( 'img' );

				img.replace( element );
=======
				var imageOrLink = element.findOne( 'a,img' );

				imageOrLink.replace( element );

				return imageOrLink;
			}

			// Wraps <img/> -> <a><img/></a>.
			// Returns reference to <a>.
			//
			// @param {CKEDITOR.dom.element} img
			// @param {Object} linkData
			// @returns {CKEDITOR.dom.element}
			function wrapInLink( img, linkData ) {
				var link = doc.createElement( 'a', {
					attributes: {
						href: linkData.url
					}
				} );

				link.replace( img );
				img.move( link );

				return link;
			}

			// De-wraps <a><img/></a> -> <img/>.
			// Returns the reference to <img/>
			//
			// @param {CKEDITOR.dom.element} link
			// @returns {CKEDITOR.dom.element}
			function unwrapFromLink( link ) {
				var img = link.findOne( 'img' );

				img.replace( link );
>>>>>>> fd4f17ce11eb398e844c9056c0e25087492a122b

				return img;
			}

			function replaceSafely( replacing, replaced ) {
				if ( replaced.getParent() ) {
					var range = editor.createRange();

					range.moveToPosition( replaced, CKEDITOR.POSITION_BEFORE_START );

					// Remove old element. Do it before insertion to avoid a case when
					// element is moved from 'replaced' element before it, what creates
					// a tricky case which insertElementIntorRange does not handle.
					replaced.remove();

					editable.insertElementIntoRange( replacing, range );
				}
				else
					replacing.replace( replaced );
			}

<<<<<<< HEAD
			return function( data ) {
				var oldState = data.oldState,
					newState = data.newState,
					name;

				// Iterate over possible state variables.
				for ( var i = 0; i < shiftables.length; i++ ) {
					name = shiftables[ i ];

					stateActions[ name ]( data,
						oldState ? oldState[ name ] : null,
						newState[ name ] );
				}

				data.init( data.element );
=======
			return function( shift ) {
				var name, i;

				shift.changed = {};

				for ( i = 0; i < shiftables.length; i++ ) {
					name = shiftables[ i ];

					shift.changed[ name ] = shift.oldData ?
						shift.oldData[ name ] !== shift.newData[ name ] : false;
				}

				// Iterate over possible state variables.
				for ( i = 0; i < shiftables.length; i++ ) {
					name = shiftables[ i ];

					stateActions[ name ]( shift,
						shift.oldData ? shift.oldData[ name ] : null,
						shift.newData[ name ] );
				}

				shift.inflate();
>>>>>>> fd4f17ce11eb398e844c9056c0e25087492a122b
			};
		},

		// Checks whether current ratio of the image match the natural one.
		// by comparing dimensions.
		// @param {CKEDITOR.dom.element} image
		// @returns {Boolean}
		checkHasNaturalRatio: function( image ) {
			var $ = image.$,
				natural = this.getNatural( image );

			// The reason for two alternative comparisons is that the rounding can come from
			// both dimensions, e.g. there are two cases:
			// 	1. height is computed as a rounded relation of the real height and the value of width,
			//	2. width is computed as a rounded relation of the real width and the value of heigh.
			return Math.round( $.clientWidth / natural.width * natural.height ) == $.clientHeight ||
				Math.round( $.clientHeight / natural.height * natural.width ) == $.clientWidth;
		},

		// Returns natural dimensions of the image. For modern browsers
		// it uses natural(Width|Height) for old ones (IE8), creates
		// a new image and reads dimensions.
		// @param {CKEDITOR.dom.element} image
		// @returns {Object}
		getNatural: function( image ) {
			var dimensions;

			if ( image.$.naturalWidth ) {
				dimensions = {
					width: image.$.naturalWidth,
					height: image.$.naturalHeight
				};
			} else {
				var img = new Image();
				img.src = image.getAttribute( 'src' );

				dimensions = {
					width: img.width,
					height: img.height
				};
			}

			return dimensions;
		}
	};

<<<<<<< HEAD
	function setWrapperAlign( widget ) {
		var wrapper = widget.wrapper,
			align = widget.data.align;

		if ( align == 'center' ) {
			if ( !widget.inline )
				wrapper.setStyle( 'text-align', 'center' );

			wrapper.removeStyle( 'float' );
		} else {
			if ( !widget.inline )
				wrapper.removeStyle( 'text-align' );

			if ( align == 'none' )
				wrapper.removeStyle( 'float' );
			else
				wrapper.setStyle( 'float', align );
=======
	function setWrapperAlign( widget, alignClasses ) {
		var wrapper = widget.wrapper,
			align = widget.data.align,
			hasCaption = widget.data.hasCaption;

		if ( alignClasses ) {
			// Remove all align classes first.
			for ( var i = 3; i--; )
				wrapper.removeClass( alignClasses[ i ] );

			if ( align == 'center' ) {
				// Avoid touching non-captioned, centered widgets because
				// they have the class set on the element instead of wrapper:
				//
				// 	<div class="cke_widget_wrapper">
				// 		<p class="center-class">
				// 			<img />
				// 		</p>
				// 	</div>
				if ( hasCaption )
					wrapper.addClass( alignClasses[ 1 ] );
			} else if ( align != 'none' )
				wrapper.addClass( alignClasses[ alignmentsObj[ align ] ] );
		} else {
			if ( align == 'center' ) {
				if ( hasCaption )
					wrapper.setStyle( 'text-align', 'center' );
				else
					wrapper.removeStyle( 'text-align' );

				wrapper.removeStyle( 'float' );
			}
			else {
				if ( align == 'none' )
					wrapper.removeStyle( 'float' );
				else
					wrapper.setStyle( 'float', align );

				wrapper.removeStyle( 'text-align' );
			}
>>>>>>> fd4f17ce11eb398e844c9056c0e25087492a122b
		}
	}

	// Returns a function that creates widgets from all <img> and
	// <figure class="{config.image2_captionedClass}"> elements.
	//
	// @param {CKEDITOR.editor} editor
	// @returns {Function}
	function upcastWidgetElement( editor ) {
<<<<<<< HEAD
		var isCenterWrapper = centerWrapperChecker( editor );
=======
		var isCenterWrapper = centerWrapperChecker( editor ),
			captionedClass = editor.config.image2_captionedClass;
>>>>>>> fd4f17ce11eb398e844c9056c0e25087492a122b

		// @param {CKEDITOR.htmlParser.element} el
		// @param {Object} data
		return function( el, data ) {
			var dimensions = { width: 1, height: 1 },
				name = el.name,
				image;

			// #11110 Don't initialize on pasted fake objects.
			if ( el.attributes[ 'data-cke-realelement' ] )
				return;

			// If a center wrapper is found, there are 3 possible cases:
			//
			// 1. <div style="text-align:center"><figure>...</figure></div>.
			//    In this case centering is done with a class set on widget.wrapper.
			//    Simply replace centering wrapper with figure (it's no longer necessary).
			//
			// 2. <p style="text-align:center"><img/></p>.
			//    Nothing to do here: <p> remains for styling purposes.
			//
			// 3. <div style="text-align:center"><img/></div>.
			//    Nothing to do here (2.) but that case is only possible in enterMode different
			//    than ENTER_P.
			if ( isCenterWrapper( el ) ) {
				if ( name == 'div' ) {
					var figure = el.getFirst( 'figure' );

					// Case #1.
					if ( figure ) {
						el.replaceWith( figure );
						el = figure;
					}
				}
				// Cases #2 and #3 (handled transparently)

				// If there's a centering wrapper, save it in data.
				data.align = 'center';

<<<<<<< HEAD
				image = el.getFirst( 'img' );
			}

			// No center wrapper has been found.
			else if ( name == 'figure' && el.hasClass( 'caption' ) )
				image = el.getFirst( 'img' );

			// Inline widget from plain img.
			else if ( name == 'img' )
				image = el;
=======
				// Image can be wrapped in link <a><img/></a>.
				image = el.getFirst( 'img' ) || el.getFirst( 'a' ).getFirst( 'img' );
			}

			// No center wrapper has been found.
			else if ( name == 'figure' && el.hasClass( captionedClass ) )
				image = el.getFirst( 'img' ) || el.getFirst( 'a' ).getFirst( 'img' );

			// Upcast linked image like <a><img/></a>.
			else if ( isLinkedOrStandaloneImage( el ) )
				image = el.name == 'a' ? el.children[ 0 ] : el;
>>>>>>> fd4f17ce11eb398e844c9056c0e25087492a122b

			if ( !image )
				return;

			// If there's an image, then cool, we got a widget.
			// Now just remove dimension attributes expressed with %.
			for ( var d in dimensions ) {
				var dimension = image.attributes[ d ];

				if ( dimension && dimension.match( regexPercent ) )
					delete image.attributes[ d ];
			}

			return el;
		};
	}

<<<<<<< HEAD
	// Transforms the widget to the external format according to the current configuration.
	//
	// @param {CKEDITOR.htmlParser.element} el
	function downcastWidgetElement( el ) {
		var attrs = el.attributes,
			align = this.data.align;

		// De-wrap the image from resize handle wrapper.
		// Only block widgets have one.
		if ( !this.inline ) {
			var resizeWrapper = el.getFirst( 'span' ),
				img = resizeWrapper.getFirst( 'img' );

			resizeWrapper.replaceWith( img );
		}

		if ( align && align != 'none' ) {
			var styles = CKEDITOR.tools.parseCssText( attrs.style || '' );

			// When the widget is captioned (<figure>) and internally centering is done
			// with widget's wrapper inline style, in the external data representation,
			// <figure> must be wrapped with an element holding an inline style:
			//
			//   <div style="text-align:center">
			//     <figure class="image" style="display:inline-block">
			//      <img alt="A" src="B" />
			//       <figcaption>C</figcaption>
			//     </figure>
			//   </div>
			if ( align == 'center' && el.name == 'figure' )
				el = el.wrapWith( new CKEDITOR.htmlParser.element( 'div', { style: 'text-align:center' } ) );

			// If left/right, add float style to the downcasted element.
			else if ( align in { left: 1, right: 1 } )
				styles[ 'float' ] = align;

			// Update element styles.
			if ( !CKEDITOR.tools.isEmpty( styles ) )
				attrs.style = CKEDITOR.tools.writeCssText( styles );
		}

		return el;
=======
	// Returns a function which transforms the widget to the external format
	// according to the current configuration.
	//
	// @param {CKEDITOR.editor}
	function downcastWidgetElement( editor ) {
		var alignClasses = editor.config.image2_alignClasses;

		// @param {CKEDITOR.htmlParser.element} el
		return function( el ) {
			// In case of <a><img/></a>, <img/> is the element to hold
			// inline styles or classes (image2_alignClasses).
			var attrsHolder = el.name == 'a' ? el.getFirst() : el,
				attrs = attrsHolder.attributes,
				align = this.data.align;

			// De-wrap the image from resize handle wrapper.
			// Only block widgets have one.
			if ( !this.inline ) {
				var resizeWrapper = el.getFirst( 'span' );

				if ( resizeWrapper )
					resizeWrapper.replaceWith( resizeWrapper.getFirst( { img: 1, a: 1 } ) );
			}

			if ( align && align != 'none' ) {
				var styles = CKEDITOR.tools.parseCssText( attrs.style || '' );

				// When the widget is captioned (<figure>) and internally centering is done
				// with widget's wrapper style/class, in the external data representation,
				// <figure> must be wrapped with an element holding an style/class:
				//
				// 	<div style="text-align:center">
				// 		<figure class="image" style="display:inline-block">...</figure>
				// 	</div>
				// or
				// 	<div class="some-center-class">
				// 		<figure class="image">...</figure>
				// 	</div>
				//
				if ( align == 'center' && el.name == 'figure' ) {
					el = el.wrapWith( new CKEDITOR.htmlParser.element( 'div',
						alignClasses ? { 'class': alignClasses[ 1 ] } : { style: 'text-align:center' } ) );
				}

				// If left/right, add float style to the downcasted element.
				else if ( align in { left: 1, right: 1 } ) {
					if ( alignClasses )
						attrsHolder.addClass( alignClasses[ alignmentsObj[ align ] ] );
					else
						styles[ 'float' ] = align;
				}

				// Update element styles.
				if ( !alignClasses && !CKEDITOR.tools.isEmpty( styles ) )
					attrs.style = CKEDITOR.tools.writeCssText( styles );
			}

			return el;
		};
>>>>>>> fd4f17ce11eb398e844c9056c0e25087492a122b
	}

	// Returns a function that checks if an element is a centering wrapper.
	//
	// @param {CKEDITOR.editor} editor
	// @returns {Function}
	function centerWrapperChecker( editor ) {
<<<<<<< HEAD
=======
		var captionedClass = editor.config.image2_captionedClass,
			alignClasses = editor.config.image2_alignClasses,
			validChildren = { figure: 1, a: 1, img: 1 };

>>>>>>> fd4f17ce11eb398e844c9056c0e25087492a122b
		return function( el ) {
			// Wrapper must be either <div> or <p>.
			if ( !( el.name in { div: 1, p: 1 } ) )
				return false;

			var children = el.children;

			// Centering wrapper can have only one child.
			if ( children.length !== 1 )
				return false;

<<<<<<< HEAD
			var child = children[ 0 ],
				childName = child.name;

			// Only <figure> or <img /> can be first (only) child of centering wrapper,
			// regardless of its type.
			if ( childName != 'figure' && childName != 'img' )
=======
			var child = children[ 0 ];

			// Only <figure> or <img /> can be first (only) child of centering wrapper,
			// regardless of its type.
			if ( !( child.name in validChildren ) )
>>>>>>> fd4f17ce11eb398e844c9056c0e25087492a122b
				return false;

			// If centering wrapper is <p>, only <img /> can be the child.
			//   <p style="text-align:center"><img /></p>
			if ( el.name == 'p' ) {
<<<<<<< HEAD
				if ( childName != 'img' )
=======
				if ( !isLinkedOrStandaloneImage( child ) )
>>>>>>> fd4f17ce11eb398e844c9056c0e25087492a122b
					return false;
			}
			// Centering <div> can hold <img/> or <figure>, depending on enterMode.
			else {
				// If a <figure> is the first (only) child, it must have a class.
				//   <div style="text-align:center"><figure>...</figure><div>
<<<<<<< HEAD
				if ( childName == 'figure' && !child.hasClass( 'caption' ) )
					return false;

				// Centering <div> can hold <img /> only when enterMode is ENTER_(BR|DIV).
				//   <div style="text-align:center"><img /></div>
				if ( childName == 'img' && editor.enterMode == CKEDITOR.ENTER_P )
					return false;
			}

			var styles = CKEDITOR.tools.parseCssText( el.attributes.style || '', true );

			// Centering wrapper got to be... centering.
			if ( styles[ 'text-align' ] == 'center' )
=======
				if ( child.name == 'figure' ) {
					if ( !child.hasClass( captionedClass ) )
						return false;
				} else {
					// Centering <div> can hold <img/> or <a><img/></a> only when enterMode
					// is ENTER_(BR|DIV).
					//   <div style="text-align:center"><img /></div>
					//   <div style="text-align:center"><a><img /></a></div>
					if ( editor.enterMode == CKEDITOR.ENTER_P )
						return false;

					// Regardless of enterMode, a child which is not <figure> must be
					// either <img/> or <a><img/></a>.
					if ( !isLinkedOrStandaloneImage( child ) )
						return false;
				}
			}

			// Centering wrapper got to be... centering. If image2_alignClasses are defined,
			// check for centering class. Otherwise, check the style.
			if ( alignClasses ? el.hasClass( alignClasses[ 1 ] ) :
					CKEDITOR.tools.parseCssText( el.attributes.style || '', true )[ 'text-align' ] == 'center' )
>>>>>>> fd4f17ce11eb398e844c9056c0e25087492a122b
				return true;

			return false;
		};
	}

<<<<<<< HEAD
=======
	// Checks whether element is <img/> or <a><img/></a>.
	//
	// @param {CKEDITOR.htmlParser.element}
	function isLinkedOrStandaloneImage( el ) {
		if ( el.name == 'img' )
			return true;
		else if ( el.name == 'a' )
			return el.children.length == 1 && el.getFirst( 'img' );

		return false;
	}

>>>>>>> fd4f17ce11eb398e844c9056c0e25087492a122b
	// Sets width and height of the widget image according to current widget data.
	//
	// @param {CKEDITOR.plugins.widget} widget
	function setDimensions( widget ) {
		var data = widget.data,
			dimensions = { width: data.width, height: data.height },
			image = widget.parts.image;

		for ( var d in dimensions ) {
			if ( dimensions[ d ] )
				image.setAttribute( d, dimensions[ d ] );
			else
				image.removeAttribute( d );
		}
	}

	// Defines all features related to drag-driven image resizing.
	//
	// @param {CKEDITOR.plugins.widget} widget
	function setupResizer( widget ) {
		var editor = widget.editor,
			editable = editor.editable(),
			doc = editor.document,
<<<<<<< HEAD
			resizer = doc.createElement( 'span' );
=======

			// Store the resizer in a widget for testing (#11004).
			resizer = widget.resizer = doc.createElement( 'span' );
>>>>>>> fd4f17ce11eb398e844c9056c0e25087492a122b

		resizer.addClass( 'cke_image_resizer' );
		resizer.setAttribute( 'title', editor.lang.image2.resizer );
		resizer.append( new CKEDITOR.dom.text( '\u200b', doc ) );

		// Inline widgets don't need a resizer wrapper as an image spans the entire widget.
		if ( !widget.inline ) {
<<<<<<< HEAD
			var oldResizeWrapper = widget.element.getFirst(),
				resizeWrapper = doc.createElement( 'span' );

			resizeWrapper.addClass( 'cke_image_resizer_wrapper' );
			resizeWrapper.append( widget.parts.image );
=======
			var imageOrLink = widget.parts.link || widget.parts.image,
				oldResizeWrapper = imageOrLink.getParent(),
				resizeWrapper = doc.createElement( 'span' );

			resizeWrapper.addClass( 'cke_image_resizer_wrapper' );
			resizeWrapper.append( imageOrLink );
>>>>>>> fd4f17ce11eb398e844c9056c0e25087492a122b
			resizeWrapper.append( resizer );
			widget.element.append( resizeWrapper, true );

			// Remove the old wrapper which could came from e.g. pasted HTML
			// and which could be corrupted (e.g. resizer span has been lost).
			if ( oldResizeWrapper.is( 'span' ) )
				oldResizeWrapper.remove();
		} else
			widget.wrapper.append( resizer );

		// Calculate values of size variables and mouse offsets.
		resizer.on( 'mousedown', function( evt ) {
			var image = widget.parts.image,

				// "factor" can be either 1 or -1. I.e.: For right-aligned images, we need to
				// subtract the difference to get proper width, etc. Without "factor",
				// resizer starts working the opposite way.
				factor = widget.data.align == 'right' ? -1 : 1,

				// The x-coordinate of the mouse relative to the screen
				// when button gets pressed.
				startX = evt.data.$.screenX,
				startY = evt.data.$.screenY,

				// The initial dimensions and aspect ratio of the image.
				startWidth = image.$.clientWidth,
				startHeight = image.$.clientHeight,
				ratio = startWidth / startHeight,

				listeners = [],

				// A class applied to editable during resizing.
				cursorClass = 'cke_image_s' + ( !~factor ? 'w' : 'e' ),

				nativeEvt, newWidth, newHeight, updateData,
				moveDiffX, moveDiffY, moveRatio;

			// Save the undo snapshot first: before resizing.
			editor.fire( 'saveSnapshot' );

			// Mousemove listeners are removed on mouseup.
			attachToDocuments( 'mousemove', onMouseMove, listeners );

			// Clean up the mousemove listener. Update widget data if valid.
			attachToDocuments( 'mouseup', onMouseUp, listeners );

			// The entire editable will have the special cursor while resizing goes on.
			editable.addClass( cursorClass );

			// This is to always keep the resizer element visible while resizing.
			resizer.addClass( 'cke_image_resizing' );

			// Attaches an event to a global document if inline editor.
<<<<<<< HEAD
			// Additionally, if framed, also attaches the same event to iframe's document.
=======
			// Additionally, if classic (`iframe`-based) editor, also attaches the same event to `iframe`'s document.
>>>>>>> fd4f17ce11eb398e844c9056c0e25087492a122b
			function attachToDocuments( name, callback, collection ) {
				var globalDoc = CKEDITOR.document,
					listeners = [];

				if ( !doc.equals( globalDoc ) )
					listeners.push( globalDoc.on( name, callback ) );

				listeners.push( doc.on( name, callback ) );

				if ( collection ) {
					for ( var i = listeners.length; i--; )
						collection.push( listeners.pop() );
				}
			}

			// Calculate with first, and then adjust height, preserving ratio.
			function adjustToX() {
				newWidth = startWidth + factor * moveDiffX;
				newHeight = Math.round( newWidth / ratio );
			}

			// Calculate height first, and then adjust width, preserving ratio.
			function adjustToY() {
				newHeight = startHeight - moveDiffY;
				newWidth = Math.round( newHeight * ratio );
			}

			// This is how variables refer to the geometry.
			// Note: x corresponds to moveOffset, this is the position of mouse
			// Note: o corresponds to [startX, startY].
			//
			// 	+--------------+--------------+
			// 	|              |              |
			// 	|      I       |      II      |
			// 	|              |              |
			// 	+------------- o -------------+ _ _ _
			// 	|              |              |      ^
			// 	|      VI      |     III      |      | moveDiffY
			// 	|              |         x _ _ _ _ _ v
			// 	+--------------+---------|----+
			// 	               |         |
			// 	                <------->
			// 	                moveDiffX
			function onMouseMove( evt ) {
				nativeEvt = evt.data.$;

				// This is how far the mouse is from the point the button was pressed.
				moveDiffX = nativeEvt.screenX - startX;
				moveDiffY = startY - nativeEvt.screenY;

				// This is the aspect ratio of the move difference.
				moveRatio = Math.abs( moveDiffX / moveDiffY );

				// Left, center or none-aligned widget.
				if ( factor == 1 ) {
					if ( moveDiffX <= 0 ) {
						// Case: IV.
						if ( moveDiffY <= 0 )
							adjustToX();

						// Case: I.
						else {
							if ( moveRatio >= ratio )
								adjustToX();
							else
								adjustToY();
						}
					} else {
						// Case: III.
						if ( moveDiffY <= 0 ) {
							if ( moveRatio >= ratio )
								adjustToY();
							else
								adjustToX();
						}

						// Case: II.
						else
							adjustToY();
					}
				}

				// Right-aligned widget. It mirrors behaviours, so I becomes II,
				// IV becomes III and vice-versa.
				else {
					if ( moveDiffX <= 0 ) {
						// Case: IV.
						if ( moveDiffY <= 0 ) {
							if ( moveRatio >= ratio )
								adjustToY();
							else
								adjustToX();
						}

						// Case: I.
						else
							adjustToY();
					} else {
						// Case: III.
						if ( moveDiffY <= 0 )
							adjustToX();

						// Case: II.
						else {
							if ( moveRatio >= ratio )
								adjustToX();
							else
								adjustToY();
						}
					}
				}

				// Don't update attributes if less than 10.
				// This is to prevent images to visually disappear.
				if ( newWidth >= 15 && newHeight >= 15 ) {
					image.setAttributes( { width: newWidth, height: newHeight } );
					updateData = true;
				} else
					updateData = false;
			}

			function onMouseUp( evt ) {
				var l;

				while ( ( l = listeners.pop() ) )
					l.removeListener();

				// Restore default cursor by removing special class.
				editable.removeClass( cursorClass );

				// This is to bring back the regular behaviour of the resizer.
				resizer.removeClass( 'cke_image_resizing' );

				if ( updateData ) {
					widget.setData( { width: newWidth, height: newHeight } );

					// Save another undo snapshot: after resizing.
					editor.fire( 'saveSnapshot' );
				}

				// Don't update data twice or more.
				updateData = false;
			}
		} );

		// Change the position of the widget resizer when data changes.
		widget.on( 'data', function() {
			resizer[ widget.data.align == 'right' ? 'addClass' : 'removeClass' ]( 'cke_image_resizer_left' );
		} );
	}

	// Integrates widget alignment setting with justify
	// plugin's commands (execution and refreshment).
	// @param {CKEDITOR.editor} editor
	// @param {String} value 'left', 'right', 'center' or 'block'
	function alignCommandIntegrator( editor ) {
<<<<<<< HEAD
		var execCallbacks = [];
=======
		var execCallbacks = [],
			enabled;
>>>>>>> fd4f17ce11eb398e844c9056c0e25087492a122b

		return function( value ) {
			var command = editor.getCommand( 'justify' + value );

			// Most likely, the justify plugin isn't loaded.
			if ( !command )
				return;

			// This command will be manually refreshed along with
			// other commands after exec.
			execCallbacks.push( function() {
				command.refresh( editor, editor.elementPath() );
			} );

			if ( value in { right: 1, left: 1, center: 1 } ) {
				command.on( 'exec', function( evt ) {
					var widget = getFocusedWidget( editor );

					if ( widget ) {
						widget.setData( 'align', value );

						// Once the widget changed its align, all the align commands
						// must be refreshed: the event is to be cancelled.
						for ( var i = execCallbacks.length; i--; )
							execCallbacks[ i ]();

						evt.cancel();
					}
				} );
			}

			command.on( 'refresh', function( evt ) {
				var widget = getFocusedWidget( editor ),
					allowed = { right: 1, left: 1, center: 1 };

				if ( !widget )
					return;

<<<<<<< HEAD
				this.setState(
					( widget.data.align == value ) ?
							CKEDITOR.TRISTATE_ON
						:
							( value in allowed ) ?
									CKEDITOR.TRISTATE_OFF
								:
									CKEDITOR.TRISTATE_DISABLED );
=======
				// Cache "enabled" on first use. This is because filter#checkFeature may
				// not be available during plugin's afterInit in the future — a moment when
				// alignCommandIntegrator is called.
				if ( enabled == undefined )
					enabled = editor.filter.checkFeature( editor.widgets.registered.image.features.align );

				// Don't allow justify commands when widget alignment is disabled (#11004).
				if ( !enabled )
					this.setState( CKEDITOR.TRISTATE_DISABLED );
				else {
					this.setState(
						( widget.data.align == value ) ?
								CKEDITOR.TRISTATE_ON
							:
								( value in allowed ) ?
										CKEDITOR.TRISTATE_OFF
									:
										CKEDITOR.TRISTATE_DISABLED );
				}
>>>>>>> fd4f17ce11eb398e844c9056c0e25087492a122b

				evt.cancel();
			} );
		};
	}

<<<<<<< HEAD
=======
	function linkCommandIntegrator( editor ) {
		// Nothing to integrate with if link is not loaded.
		if ( !editor.plugins.link )
			return;

		CKEDITOR.on( 'dialogDefinition', function( evt ) {
			var dialog = evt.data;

			if ( dialog.name == 'link' ) {
				var def = dialog.definition;

				var onShow = def.onShow,
					onOk = def.onOk;

				def.onShow = function() {
					var widget = getFocusedWidget( editor );

					// Widget cannot be enclosed in a link, i.e.
					//		<a>foo<inline widget/>bar</a>
					if ( widget && ( widget.inline ? !widget.wrapper.getAscendant( 'a' ) : 1 ) )
						this.setupContent( widget.data.link || {} );
					else
						onShow.apply( this, arguments );
				};

				// Set widget data if linking the widget using
				// link dialog (instead of default action).
				// State shifter handles data change and takes
				// care of internal DOM structure of linked widget.
				def.onOk = function() {
					var widget = getFocusedWidget( editor );

					// Widget cannot be enclosed in a link, i.e.
					//		<a>foo<inline widget/>bar</a>
					if ( widget && ( widget.inline ? !widget.wrapper.getAscendant( 'a' ) : 1 ) ) {
						var data = {};

						// Collect data from fields.
						this.commitContent( data );

						// Set collected data to widget.
						widget.setData( 'link', data );
					} else
						onOk.apply( this, arguments );
				};
			}
		} );

		// Overwrite default behaviour of unlink command.
		editor.getCommand( 'unlink' ).on( 'exec', function( evt ) {
			var widget = getFocusedWidget( editor );

			// Override unlink only when link truly belongs to the widget.
			// If wrapped inline widget in a link, let default unlink work (#11814).
			if ( !widget || !widget.parts.link )
				return;

			widget.setData( 'link', null );

			// Selection (which is fake) may not change if unlinked image in focused widget,
			// i.e. if captioned image. Let's refresh command state manually here.
			this.refresh( editor, editor.elementPath() );

			evt.cancel();
		} );

		// Overwrite default refresh of unlink command.
		editor.getCommand( 'unlink' ).on( 'refresh', function( evt ) {
			var widget = getFocusedWidget( editor );

			if ( !widget )
				return;

			// Note that widget may be wrapped in a link, which
			// does not belong to that widget (#11814).
			this.setState( widget.data.link || widget.wrapper.getAscendant( 'a' ) ?
				CKEDITOR.TRISTATE_OFF : CKEDITOR.TRISTATE_DISABLED );

			evt.cancel();
		} );
	}

>>>>>>> fd4f17ce11eb398e844c9056c0e25087492a122b
	// Returns the focused widget, if of the type specific for this plugin.
	// If no widget is focused, `null` is returned.
	//
	// @param {CKEDITOR.editor}
	// @returns {CKEDITOR.plugins.widget}
	function getFocusedWidget( editor ) {
		var widget = editor.widgets.focused;

		if ( widget && widget.name == 'image' )
			return widget;

		return null;
	}
<<<<<<< HEAD
} )();
=======

	// Returns a set of widget allowedContent rules, depending
	// on configurations like config#image2_alignClasses or
	// config#image2_captionedClass.
	//
	// @param {CKEDITOR.editor}
	// @returns {Object}
	function getWidgetAllowedContent( editor ) {
		var alignClasses = editor.config.image2_alignClasses,
			rules = {
				// Widget may need <div> or <p> centering wrapper.
				div: {
					match: centerWrapperChecker( editor )
				},
				p: {
					match: centerWrapperChecker( editor )
				},
				img: {
					attributes: '!src,alt,width,height'
				},
				figure: {
					classes: '!' + editor.config.image2_captionedClass
				},
				figcaption: true
			};

		if ( alignClasses ) {
			// Centering class from the config.
			rules.div.classes = alignClasses[ 1 ];
			rules.p.classes = rules.div.classes;

			// Left/right classes from the config.
			rules.img.classes = alignClasses[ 0 ] + ',' + alignClasses[ 2 ];
			rules.figure.classes += ',' + rules.img.classes;
		} else {
			// Centering with text-align.
			rules.div.styles = 'text-align';
			rules.p.styles = 'text-align';

			rules.img.styles = 'float';
			rules.figure.styles = 'float,display';
		}

		return rules;
	}

	// Returns a set of widget feature rules, depending
	// on editor configuration. Note that the following may not cover
	// all the possible cases since requiredContent supports a single
	// tag only.
	//
	// @param {CKEDITOR.editor}
	// @returns {Object}
	function getWidgetFeatures( editor ) {
		var alignClasses = editor.config.image2_alignClasses,
			features = {
				dimension: {
					requiredContent: 'img[width,height]'
				},
				align: {
					requiredContent: 'img' +
						( alignClasses ? '(' + alignClasses[ 0 ] + ')' : '{float}' )
				},
				caption: {
					requiredContent: 'figcaption'
				}
			};

		return features;
	}

	// Returns element which is styled, considering current
	// state of the widget.
	//
	// @see CKEDITOR.plugins.widget#applyStyle
	// @param {CKEDITOR.plugins.widget} widget
	// @returns {CKEDITOR.dom.element}
	function getStyleableElement( widget ) {
		return widget.data.hasCaption ? widget.element : widget.parts.image;
	}
} )();

/**
 * A CSS class applied to the `<figure>` element of a captioned image.
 *
 *		// Changes the class to "captionedImage".
 *		CKEDITOR.config.image2_captionedClass = 'captionedImage';
 *
 * @cfg {String} [image2_captionedClass='image']
 * @member CKEDITOR.config
 */
CKEDITOR.config.image2_captionedClass = 'image';

/**
 * CSS classes applied to aligned images. Useful to take control over the way
 * the images are aligned, i.e. to customize output HTML and integrate external stylesheets.
 *
 * Classes should be defined in an array of three elements, containing left, center, and right
 * alignment classes, respectively. For example:
 *
 *		config.image2_alignClasses = [ 'align-left', 'align-center', 'align-right' ];
 *
 * **Note**: Once this configuration option is set, the plugin will no longer produce inline
 * styles for alignment. It means that e.g. the following HTML will be produced:
 *
 *		<img alt="My image" class="custom-center-class" src="foo.png" />
 *
 * instead of:
 *
 *		<img alt="My image" style="float:left" src="foo.png" />
 *
 * **Note**: Once this configuration option is set, corresponding style definitions
 * must be supplied to the editor:
 *
 * * For [classic editor](#!/guide/dev_framed) it can be done by defining additional
 * styles in the {@link CKEDITOR.config#contentsCss stylesheets loaded by the editor}. The same
 * styles must be provided on the target page where the content will be loaded.
 * * For [inline editor](#!/guide/dev_inline) the styles can be defined directly
 * with `<style> ... <style>` or `<link href="..." rel="stylesheet">`, i.e. within the `<head>`
 * of the page.
 *
 * For example, considering the following configuration:
 *
 *		config.image2_alignClasses = [ 'align-left', 'align-center', 'align-right' ];
 *
 * CSS rules can be defined as follows:
 *
 *		.align-left {
 *			float: left;
 *		}
 *
 *		.align-right {
 *			float: right;
 *		}
 *
 *		.align-center {
 *			text-align: center;
 *		}
 *
 *		.align-center > figure {
 *			display: inline-block;
 *		}
 *
 * @since 4.4
 * @cfg {String[]} [image2_alignClasses=null]
 * @member CKEDITOR.config
 */
>>>>>>> fd4f17ce11eb398e844c9056c0e25087492a122b
