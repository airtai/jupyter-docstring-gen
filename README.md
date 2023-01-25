# Jupyter Docstring Generator [Instantly improve the documentation of your Python code with Codex]

This extension uses <a href = "https://docstring-gen.airt.ai/" target="_blank">docstring-gen</a> library for generating documentation for your Python code. docstring-gen is an easy-to-use Python library that uses <a href = "https://beta.openai.com/docs/models/codex\" target="_blank">OpenAI's Codex model</a> to automatically generate <a href="https://google.github.io/styleguide/pyguide.html\" target = "_blank">Google-style docstrings</a> for Python codebase. The library is capable of reading both Jupyter notebooks and Python files, and seamlessly adds meaningful docstrings to classes and functions that lack documentation. By using **docstring-gen**, developers can automatically generate docstrings for their codebase, resulting in time savings and improved documentation quality.

**Requirements**: The following packages must be installed prior to proceeding:

```bash
pip install docstring-gen
```

**Note**: The **docstring-gen** library uses OpenAI’s Codex model to generate docstrings for your Python classes and functions. In order to use this extension, you’ll need to <a href="https://beta.openai.com/account/api-keys" target = "_blank">create an API key for OpenAI.</a> Once you have your API key, store it in the OPENAI_API_KEY environment variable. This is a necessary step for the extension to work.

Then the extension provides

- a toolbar button
- a keyboard shortcut for generating docstring for the current code-cell (default: Ctrl-G)
- a keyboard shortcut for generating docstring for whole code-cells (default: Ctrl-Shift-G)


## Installation

If you use [jupyter-contrib-nbextensions](https://github.com/ipython-contrib/jupyter_contrib_nbextensions), proceed as usual. 

Otherwise, you can still install/try the extension from below repo, using

```bash
jupyter nbextension install https://github.com/harishmohanraj/jupyter-docstring-gen/archive/master.zip --user
jupyter nbextension enable jupyter-docstring-gen-master/jupyter-docstring-gen
```
