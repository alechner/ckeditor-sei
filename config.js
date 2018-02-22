/*
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/terms-of-use/#open-source-licences
 */

CKEDITOR.editorConfig = function (config) {
  // Define changes to default configuration here. For example:
  // config.language = 'fr';
  // config.uiColor = '#AADC6E';
  // %REMOVE_START%

  config.language = 'pt-br';
  config.skin = 'moonocolor';
  config.autoGrow_minHeight = 10;
  config.autoGrow_onStartup = true;
  config.dialog_noConfirmCancel = true;
  //config.height=100;
  config.scayt_sLang = 'pt_BR';
  config.defaultLanguage = 'pt-br';
  config.sharedSpaces = {'top': 'divComandos'};
  config.scayt_autoStartup = true;
  config.scayt_uiTabs = '0,0,0';
  config.linkShowAdvancedTab = false;
  config.linkShowTargetTab = false;

  config.plugins =
      'about,' +
      'a11yhelp,' +
      'basicstyles,' +
      // 'bidi,' +
      // 'blockquote,' +
      'clipboard,' +
      'colorbutton,' +
      'colordialog,' +
      'copyformatting,' +
      'contextmenu,' +
      'dialogadvtab,' +
      'div,' +
      // 'elementspath,' +
      'enterkey,' +
      'entities,' +
      'filebrowser,' +
      'find,' +
      // 'flash,' +
      'floatingspace,' +
      // 'font,' +
      // 'format,' +
      // 'forms,' +
      'horizontalrule,' +
      'htmlwriter,' +
      'image,' +
      // 'iframe,' +
      'indentlist,' +
      'indentblock,' +
      'justify,' +
      // 'language,' +
      // 'link,' +
      'list,' +
      'liststyle,' +
      'magicline,' +
      // 'maximize,' +
      // 'newpage,' +
      // 'pagebreak,' +
      'pastefromword,' +
      'pastetext,' +
      // 'preview,' +
      // 'print,' +
      'removeformat,' +
      // 'resize,' +
      'save,' +
      'selectall,' +
      'showblocks,' +
      'showborders,' +
      // 'smiley,' +
      'sourcearea,' +
      // 'specialchar,' +
      'stylescombo,' +
      'tab,' +
      'table,' +
      'tableselection,' +
      'tabletools,' +
      'templates,' +
      'toolbar,' +
      'undo,' +
      // 'uploadimage,' +
      'widgetselection,' +
      'wysiwygarea';
  // %REMOVE_END%
};


CKEDITOR.on('dialogDefinition', function (ev) {
  if (ev.data.name=='image') {
    var dd = ev.data.definition;
    dd.removeContents('Link');
    dd.removeContents('advanced');
    dd.minHeight = 200;
    dd.minWidth = 250;
    var tab = dd.getContents('info');
    tab.get('ratioLock').style = 'margin-top:20px;width:40px;height:40px;';
    tab.get('txtUrl').hidden = true;
    tab.get('txtAlt').hidden = true;
    tab.get('htmlPreview').hidden = true;
    tab.remove('txtHSpace');
    tab.remove('txtVSpace');
    tab.remove('cmbAlign');
  }
});

