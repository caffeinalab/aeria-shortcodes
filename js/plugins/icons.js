tinymce.PluginManager.add('as_icons', function(editor, url) {
    editor.addButton('as_icons', {
        tooltip : 'Icons',
        icon : 'as-icons',
        onclick : function() {
            tinymce.activeEditor.windowManager.open({
                title : 'Icons',
                url : url + '/icons.html',
                width : 480,
                height : 320
            });
        }
    });
});
