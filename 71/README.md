## Experiment 71: Preparing the Development Environment

#### New to Me
- To run this locally, we can start by adding a few new scripts to **package.json** (to be built out):
```json
"scripts": {
  "build": "export NODE_ENV=production && rm -rf dist && mkdir dist && rollup -c",
  "run": "",
  "serve": ""
},
```
- We want to run a script that will monitor for any changes during development. To do this, we can install `nodemon`:
```sh
npm i -D nodemon
```
- It would be nice if we could background the `nodemon` script and have a serve script happen in the same terminal window, though.