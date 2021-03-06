CKEDITOR.dialog.add( 'linksei', function( editor )
{
	return {
		title : 'Propriedades do Link',
		minWidth : 200,
		minHeight : 70,
		contents :
		[
			{
				id : 'general',
				label : 'Settings',
				elements :
				[
					{
						type : 'text',
						id : 'protocolo',
						label : 'Protocolo',
						validate : CKEDITOR.dialog.validate.SEI(),
						required : true,
						setup: function(widget){
							this.setValue(widget.data.id);
						},
						commit : function( widget )
						{
							widget.setData('id','lnkSei'+window._protocoloFormatado);
							widget.setData('text',widget.data.protocolo);
						}
					}
				]
			}
		]		
  };
});