/*
 * Base64Image Plugin for CKEditor (http://github.com/nmmf/base64image)
 * Created by ALL-INKL.COM - Neue Medien Münnich - 04. Feb 2014
 * Licensed under the terms of GPL, LGPL and MPL licenses.
 */
CKEDITOR.plugins.add("base64image", {
	lang 	: 	["af","ar","bg","bn","bs","ca","cs","cy","da","de","el","en","en-au","en-ca","en-gb","eo","es","et","eu","fa","fi","fo","fr","fr-ca","gl","gu","he","hi","hr","hu","id","is","it","ja","ka","km","ko","ku","lt","lv","mk","mn","ms","nb","nl","no","pl","pt","pt-br","ro","ru","si","sk","sl","sq","sr","sr-latn","sv","th","tr","ug","uk","vi","zh","zh-cn"],
	requires: 	"dialog",
	icons	:	"base64image",
	hidpi	:	true,
    init	: 	function(editor){
					var pluginName = 'base64imageDialog';
					
					editor.ui.addButton("base64image", {
						label: editor.lang.common.image,
						command: pluginName,
						toolbar: "insert"
					});
					CKEDITOR.dialog.add(pluginName, this.path+"dialogs/base64image.js");
					
					var allowed = 'img[alt,!src]{border-style,border-width,float,height,margin,margin-bottom,margin-left,margin-right,margin-top,width}',
						required = 'img[alt,src]';
					
					editor.addCommand( pluginName, new CKEDITOR.dialogCommand( pluginName, {
						allowedContent: allowed,
						requiredContent: required,
						contentTransformations: [
							[ 'img{width}: sizeToStyle', 'img[width]: sizeToAttribute' ],
							[ 'img{float}: alignmentToStyle', 'img[align]: alignmentToAttribute' ]
						]
					} ) );
					if(editor.addMenuItem) {
						editor.addMenuGroup("base64imageGroup");
						editor.addMenuItem("base64imageItem", {
							label: editor.lang.common.image,
							icon: this.path+"icons/base64image.png",
							command: pluginName,
							group: "base64imageGroup"
						});
					}

				}
});
