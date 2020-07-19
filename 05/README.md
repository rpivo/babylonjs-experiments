## Experiment 05: TypeScript Triple-Slash Directives

#### New to Me
- Triple-slash directives are single-line comments containing a single XML tag.
- The contents of the comment are used as compiler directives.
- Triple-slash directives are only valid at the top of their containing file.
- A triple-slash directive can only be preceded by single or multi-line comments, including other triple-slash directives.
- If they are encountered following a statement or a declaration they are treated as regular single-line comments, and hold no special meaning.
- The `/// <reference path="..." />` directive is the most common of this group, and serves as a declaration of dependency between files (this is the kind of directive that is used in the intro example).
- Triple-slash references instruct the compiler to include additional files in the compilation process.