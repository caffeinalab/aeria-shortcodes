tinymce.PluginManager.add('as_grid', function(editor, url) {
    editor.addButton('as_grid', {
        type: 'menubutton',
        tooltip: 'Grid',
        icon: 'as-grid',
        menu: [
            { text: '12 Columns', onclick: function() { editor.insertContent('[row class="row"]<br class="nc"/>[col class="col-md-1"]Text[/col]<br class="nc"/>[col class="col-md-1"]Text[/col]<br class="nc"/>[col class="col-md-1"]Text[/col]<br class="nc"/>[col class="col-md-1"]Text[/col]<br class="nc"/>[col class="col-md-1"]Text[/col]<br class="nc"/>[col class="col-md-1"]Text[/col]<br class="nc"/>[col class="col-md-1"]Text[/col]<br class="nc"/>[col class="col-md-1"]Text[/col]<br class="nc"/>[col class="col-md-1"]Text[/col]<br class="nc"/>[col class="col-md-1"]Text[/col]<br class="nc"/>[col class="col-md-1"]Text[/col]<br class="nc"/>[col class="col-md-1"]Text[/col]<br class="nc"/>[/row]'); } },
            { text: '6 Columns',  onclick: function() { editor.insertContent('[row class="row"]<br class="nc"/>[col class="col-md-2"]Text[/col]<br class="nc"/>[col class="col-md-2"]Text[/col]<br class="nc"/>[col class="col-md-2"]Text[/col]<br class="nc"/>[col class="col-md-2"]Text[/col]<br class="nc"/>[col class="col-md-2"]Text[/col]<br class="nc"/>[col class="col-md-2"]Text[/col]<br class="nc"/>[/row]'); } },
            { text: '4 Columns',  onclick: function() { editor.insertContent('[row class="row"]<br class="nc"/>[col class="col-md-3"]Text[/col]<br class="nc"/>[col class="col-md-3"]Text[/col]<br class="nc"/>[col class="col-md-3"]Text[/col]<br class="nc"/>[col class="col-md-3"]Text[/col]<br class="nc"/>[/row]'); } },
            { text: '3 Columns',  onclick: function() { editor.insertContent('[row class="row"]<br class="nc"/>[col class="col-md-4"]Text[/col]<br class="nc"/>[col class="col-md-4"]Text[/col]<br class="nc"/>[col class="col-md-4"]Text[/col]<br class="nc"/>[/row]'); } },
            { text: '2 Columns',  onclick: function() { editor.insertContent('[row class="row"]<br class="nc"/>[col class="col-md-6"]Text[/col]<br class="nc"/>[col class="col-md-6"]Text[/col]<br class="nc"/>[/row]'); } },
            { text: '1 Columns',  onclick: function() { editor.insertContent('[row class="row"]<br class="nc"/>[col class="col-md-12"]Text[/col]<br class="nc"/>[/row]'); } },
            {
                text: 'Custom Grid',
                onclick: function() {
                    tinymce.activeEditor.windowManager.open({
                        title: 'Custom Grid',
                        url: url + '/grid.html',
                        width: 580,
                        height: 420
                    });
                }
            }
        ]
    });
});
