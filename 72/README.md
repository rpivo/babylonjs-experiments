## Experiment 72: Adding Startup Scripts

#### New to Me
- If we add a shell file, we can build our code and start a local server all in one terminal.
- Add a `sh` directory, and add a `dev.sh` file:
```sh
kill -9 $(lsof -t -i:1235);
npm run build;
npm run serve;
```
- Then we need to add the `build` and the `serve` script in package.json:
```json
"build": "npm run clean && rollup -c && rm dist/*.js",
"serve": "express-compression-server --build=dist --port=1235",
```
- We'll need `express-compression-server` installed for the `serve` script:
```sh
npm i express-compression-server -g
```
