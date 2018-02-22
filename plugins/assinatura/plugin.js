/**
 * Plguin Assinatura - SEI
 * criado por bcu@trf4.jus.br
 */
CKEDITOR.plugins.add("assinatura", {
  init: function (editor) {
    editor.addCommand("assinatura", {
      exec: function (a) {
        a.getCommand("save").state===CKEDITOR.TRISTATE_ENABLED ? confirm("Deseja salvar as alterações e assinar?") &&
            (a.execCommand("save"), window.bolAssinar = !0) : infraAbrirJanela(window.strLinkAssinatura, "janelaAssinatura", 700, 450, "location\x3d0,status\x3d1,resizable\x3d1,scrollbars\x3d1")
      }
    });
    editor.ui.addButton("assinatura", {label: "Assinar", command: "assinatura", icon: this.path + "assinatura.gif"})
  }
});
