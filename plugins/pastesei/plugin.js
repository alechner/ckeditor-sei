/**
 * @license Copyright (c) 2014, Tribunal Regional Federal da 4a Região. All rights reserved.
 * derivado de plugins/pastefromword/filter/default.js
 */
( function() {
  var filter=new CKEDITOR.htmlParser.filter();
  var filtroEstilosSei=function(styles) {
    return function( styleText, element ) {
      var rules = [];
      ( styleText || '' ).replace( /&quot;/g, '"' ).replace( /\s*([^ :;]+)\s*:\s*([^;]+)\s*(?=;|$)/g, function( match, name, value ) {
        name = name.toLowerCase();
        name == 'font-family' && ( value = value.replace( /["']/g, '' ) );

        var namePattern, valuePattern, newValue, newName;
        for ( var i = 0; i < styles.length; i++ ) {
          if ( styles[ i ] ) {
            namePattern = styles[ i ][ 0 ];
            valuePattern = styles[ i ][ 1 ];
            newValue = styles[ i ][ 2 ];
            newName = styles[ i ][ 3 ];

            if ( name.match( namePattern ) && ( !valuePattern || value.match( valuePattern ) ) ) {
              name = newName || name;
              newValue = newValue || value ;

              if ( typeof newValue == 'function' )
                newValue = newValue( value, element, name );

              if ( newValue && newValue.push )
                name = newValue[ 0 ], newValue = newValue[ 1 ];

              if ( typeof newValue == 'string' )
                rules.push( [ name, newValue ] );
              return;
            }
          }
        }
      } );

      for ( var i = 0; i < rules.length; i++ )
        rules[ i ] = rules[ i ].join( ':' );
      return rules.length ? ( rules.join( ';' ) + ';' ) : false;
    };
  }
  filter.addRules(
      {
        elementNames: [
          [ ( /meta|link|script|audio|video|button|input|select|object|param|embed|style/ ), '' ]
        ],
        attributeNames: [
          [ ( /^onmouse(:?out|over)/ ), '' ],
          [ ( /^onclick/ ), '' ],
          [ ( /^onload$/ ), '' ],
          [ ( /^lang/ ), '' ]
        ],
        attributes:{
          // Prefer width styles over 'width' attributes.
          'width': function( value, element ) {
            if ( element.name in dtd.$tableContent ) return false;
          },
          // Prefer border styles over table 'border' attributes.
          'border': function( value, element ) {
            if ( element.name in dtd.$tableContent ) return false;
          },
          'td': function( element ) {
            // 'td' in 'thead' is actually <th>.
            if ( element.getAncestor( 'thead' ) )
              element.name = 'th';
          },
          'class':function(a,e){
            if (e.name!='p') return false;
            var vs=CKEDITOR.currentInstance.config.stylesheetParser_validSelectors;
            var reg=new RegExp(vs);
            if (!reg.test(e.name+'.'+a)) return false;
          },
          'valign': function( value, element ) {
            element.addStyle( 'vertical-align', value );
            return false;
          },
          'style': filtroEstilosSei(
              // Provide a white-list of styles that we preserve, those should
              // be the ones that could later be altered with editor tools.
              [
                [ ( /^list-style-type$/ ), null ],
                [ ( /^margin$|^margin-left/ ), null],
                [ ( /^clear$/ ) ],
                [ ( /^border.*|margin.*|vertical-align|float$/ ), null, function( value, element ) {
                  if ( element.name == 'img' )
                    return value;
                } ],

                [ ( /^width|height$/ ), null, function( value, element ) {
                  if ( element.name in { table: 1, td: 1, th: 1, img: 1 } )
                    return value;
                } ]
              ])
        }
      }
  );
  CKEDITOR.plugins.add( 'pastesei', {
    requires: 'clipboard',
    init: function( editor ) {
      editor.on( 'paste', function( evt ) {
        var data = evt.data;
        var frag=CKEDITOR.htmlParser.fragment.fromHtml(data.dataValue);
        var wrt=new CKEDITOR.htmlParser.basicWriter();
        filter.applyTo(frag);
        frag.writeHtml(wrt);
        data.dataValue = wrt.getHtml();
      } );
      editor.addCommand( "pastesei", {
        canUndo: false,
        async: true,
        exec: function( editor ) {
          var data = editor.getHtml();
          var frag=CKEDITOR.htmlParser.fragment.fromHtml(data);
          var wrt=new CKEDITOR.htmlParser.basicWriter();
          filter.applyTo(frag);
          frag.writeHtml(wrt);
          var data2=wrt.getHtml();
          if (data!=data2 ){
            alert('Alterou conteudo');
            console.log (data2);
          }
        }
      } );
    }
  });
})();