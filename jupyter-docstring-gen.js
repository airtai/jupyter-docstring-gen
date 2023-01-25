define(['./kernel_exec_on_cell'], function(kernel_exec_on_cell) {
    'use strict';

    var mod_name = 'jupyter-docstring-gen';

    // gives default settings
    var cfg = {
        add_toolbar_button: true,
        hotkeys: {
            process_selected: 'Ctrl-G',
            process_all: 'Ctrl-Shift-G',
        },
        register_hotkey: true,
        show_alerts_for_errors: true,
        button_label: 'Add docstring',
        button_icon: 'fa-pencil',
        kbd_shortcut_text: 'docstring-gen',
        include_auto_gen_txt: true,
        recreate_auto_gen_docs: true,
        model: 'code-davinci-002',
        temperature: 0.2,
        max_tokens: 250,
        top_p: 1.0,
        n: 3
    };

    cfg.kernel_config_map = { // map of parameters for supported kernels
        "python": {
            "library": ["import json",
            "def generate_docstring(cell_text):",
            "    from docstring_gen.docstring_generator import _check_and_add_docstrings_to_source",
            "    import re",
            "    cell_text = re.sub('^%', '#%#', cell_text, flags=re.M)",
            "    text_with_docstring = _check_and_add_docstrings_to_source(source = cell_text, include_auto_gen_txt=True, recreate_auto_gen_docs=True, model='code-davinci-002', temperature=0.2, max_tokens=250, top_p=1.0, n=3, frequency_penalty=0.0, presence_penalty=0.0, stop=['#', '\"\"\"'])",
            "    return re.sub('^#%#', '%', text_with_docstring, flags=re.M)"].join("\n"),
            "prefix": "print(json.dumps(generate_docstring(u",
            "postfix": ")))"
        },
        "javascript": {
            "library": "jsbeautify = require(" + "'js-beautify')",
            // we do this + trick to prevent require.js attempting to load js-beautify when processing the AMI-style load for this module
            "prefix": "console.log(JSON.stringify(jsbeautify.js_beautify(",
            "postfix": ")));"
        }
    };

 
    var prettifier = new kernel_exec_on_cell.define_plugin(mod_name, cfg);
    prettifier.load_ipython_extension = prettifier.initialize_plugin;
    return prettifier;
});