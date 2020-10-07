## Experiment 73: Adding Startup Scripts, Part 3

#### New to Me
- Our `build` script also calls a `clean` script, which we need to add:
```json
"clean": "rm -rf dist && mkdir dist && cp src/index.html dist/index.html",
```
- We'll need to add an `index.html` file in the `src` folder for this:
```html
<html>
  <head>
    <title>Babylon.js Experiments</title>
    <meta charset="utf-8"/>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="index.js"></script>
  </body>
</html>
```
- This will be the order of events when running the `dev` script:
  - `NODE_ENV` is set to `development`.
  - The `watch` script is then run.
  - This starts up the nodemon in `--watch` mode. This watches for changes in the `src` folder.
  - The `serve.sh` script is then executed.
  - The `serve.sh` script first kills any processes running on port 1235.
  - Then the `build` script is run.
  - This then triggers the `clean` script.
  - The `clean` script deletes the `dist` folder, and then makes a new folder called `dist`.
  - The `clean` script then copies the `index.html` file inside the `src` folder into the `dist` folder.
  - That completes the `clean` script. The build script continues on with actually building. Rollup compiles the code and deposits it all inside `dist`.
  - Once all the files are deposited, the `build` script finally deletes all the .js files (might need to revisit this since not all the .js files should be deleted).
  - That completes the `build` script. Then, the `serve` script is run.
  - This spins up `express-compression-server`, which is a server that will serve Brotli-compressed files. This will serve the files from the `dist` folder on port 1235.