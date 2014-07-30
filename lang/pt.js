/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

/**
 * @fileOverview Defines the {@link CKEDITOR.lang} object, for the
 * Portuguese language.
 */

/**#@+
   @type String
   @example
*/

/**
 * Contains the dictionary of language entries.
 * @namespace
 */
CKEDITOR.lang[ 'pt' ] = {
	// ARIA description.
	editor: 'Rich Text Editor',
	editorPanel: 'Painel do Rich Text Editor',

	// Common messages and labels.
	common: {
		// Screenreader titles. Please note that screenreaders are not always capable
		// of reading non-English words. So be careful while translating it.
		editorHelp: 'Pressione ALT+0 para ajuda',

		browseServer: 'Explorar Servidor',
		url: 'URL',
		protocol: 'Protocolo',
		upload: 'Enviar',
<<<<<<< HEAD
		uploadSubmit: 'Enviar para o Servidor',
=======
		uploadSubmit: 'Enviá-lo para o Servidor',
>>>>>>> fd4f17ce11eb398e844c9056c0e25087492a122b
		image: 'Imagem',
		flash: 'Flash',
		form: 'Formulário',
		checkbox: 'Caixa de Seleção',
<<<<<<< HEAD
		radio: 'Botão de Opção',
		textField: 'Campo de Texto',
		textarea: 'Área de Texto',
		hiddenField: 'Campo Ocultado',
		button: 'Botão',
		select: 'Campo de Seleção',
		imageButton: 'Botão de Imagem',
		notSet: '<Não definido>',
		id: 'Id.',
		name: 'Nome',
		langDir: 'Orientação do Idioma',
		langDirLtr: 'Esquerda para a Direita (EPD)',
		langDirRtl: 'Direita para a Esquerda (DPE)',
		langCode: 'Código de Idioma',
		longDescr: 'Descrição Completa do URL',
		cssClass: 'Classes de Estilo de Folhas',
=======
		radio: 'Botão',
		textField: 'Campo do Texto',
		textarea: 'Área do Texto',
		hiddenField: 'Campo Ocultado',
		button: 'Botão',
		select: 'Campo da Seleção',
		imageButton: 'Botão da Imagem',
		notSet: '<Não definido>',
		id: 'Id.',
		name: 'Nome',
		langDir: 'Direção do Idioma',
		langDirLtr: 'Esquerda para a Direita (EPD)',
		langDirRtl: 'Direita para a Esquerda (DPE)',
		langCode: 'Código do Idioma',
		longDescr: 'Descrição Completa do URL',
		cssClass: 'Classes de Estilo das Folhas',
>>>>>>> fd4f17ce11eb398e844c9056c0e25087492a122b
		advisoryTitle: 'Título Consultivo',
		cssStyle: 'Estilo',
		ok: 'CONFIRMAR',
		cancel: 'Cancelar',
		close: 'Fechar',
		preview: 'Pré-visualização',
		resize: 'Redimensionar',
		generalTab: 'Geral',
		advancedTab: 'Avançado',
		validateNumberFailed: 'Este valor não é um numero.',
<<<<<<< HEAD
		confirmNewPage: 'Irão ser perdidas quaisquer alterações não guardadas. Tem certeza que deseja carregar a página nova?',
=======
		confirmNewPage: 'Irão ser perdidas quaisquer alterações não guardadas. Tem a certeza que deseja carregar a nova página?',
>>>>>>> fd4f17ce11eb398e844c9056c0e25087492a122b
		confirmCancel: 'Foram alteradas algumas das opções. Tem a certeza que deseja fechar a janela?',
		options: 'Opções',
		target: 'Destino',
		targetNew: 'Nova Janela (_blank)',
		targetTop: 'Janela Superior (_top)',
		targetSelf: 'Mesma Janela (_self)',
		targetParent: 'Janela Parente (_parent)',
		langDirLTR: 'Esquerda para a Direita (EPD)',
		langDirRTL: 'Direita para a Esquerda (DPE)',
		styles: 'Estilo',
<<<<<<< HEAD
		cssClasses: 'Classes de Estilo de Folhas',
=======
		cssClasses: 'Classes de Estilo das Folhas',
>>>>>>> fd4f17ce11eb398e844c9056c0e25087492a122b
		width: 'Largura',
		height: 'Altura',
		align: 'Alinhamento',
		alignLeft: 'Esquerda',
		alignRight: 'Direita',
		alignCenter: 'Centrado',
		alignTop: 'Topo',
		alignMiddle: 'Centro',
<<<<<<< HEAD
		alignBottom: 'Fundo',
		invalidValue	: 'Valor inválido.',
		invalidHeight: 'A altura tem de ser um número.',
		invalidWidth: 'A largura tem de ser um número. ',
		invalidCssLength: 'Valor especificado para o campo "1%" deve ser um número positivo, com ou sem uma unidade de medida CSS válida (px, %, in, cm, mm, em, ex, pt, or pc).',
		invalidHtmlLength: 'Valor especificado para o campo "1%" deve ser um número positivo, com ou sem uma unidade de medida HTML válida (px ou %).',
		invalidInlineStyle: 'Valor especificado para o estilo em embutido deve ser constituído por uma ou mais tuplas com o formato de "nome : valor", separados por ponto e vírgula.',
		cssLengthTooltip: 'Digite um número para um valor em pixels ou um número com uma unidade CSS válida (px, %, in, cm, mm, em, ex, pt, or pc).',
=======
		alignBottom: 'Base',
		alignNone: 'None', // MISSING
		invalidValue	: 'Valor inválido.',
		invalidHeight: 'A altura deve ser um número.',
		invalidWidth: 'A largura deve ser um número. ',
		invalidCssLength: 'O valor especificado para o campo "1%" deve ser um número positivo, com ou sem uma unidade de medida CSS válida (px, %, in, cm, mm, em, ex, pt, ou pc).',
		invalidHtmlLength: 'O valor especificado para o campo "1%" deve ser um número positivo, com ou sem uma unidade de medida HTML válida (px ou %).',
		invalidInlineStyle: 'O valor especificado para o estilo em linha deve constituir um ou mais conjuntos de valores com o formato de "nome : valor", separados por ponto e vírgula.',
		cssLengthTooltip: 'Insira um número para um valor em pontos ou um número com uma unidade CSS válida (px, %, in, cm, mm, em, ex, pt, ou pc).',
>>>>>>> fd4f17ce11eb398e844c9056c0e25087492a122b

		// Put the voice-only part of the label in the span.
		unavailable: '%1<span class="cke_accessibility">, indisponível</span>'
	}
};
