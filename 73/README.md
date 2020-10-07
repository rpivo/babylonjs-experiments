## Experiment 73: Adding Startup Scripts, Part 2

#### New to Me
- We need to add the script that will start up nodemon in watch mode:
```json
"watch": "npx nodemon --watch src --ext js,ts,jsx,tsx --exec \"./sh/serve.sh\""
```
- This watches for changes to .js, .ts, .jsx, or .tsx files inside the `src` folder. When a change is detected, it runs the shell script file `serve.sh`.
- We'll also add `dev` and `prod` scripts that will initialize the whole process after first exporting `NODE_ENV` to its respective environment:
```json
"dev": "export NODE_ENV=development && npm run watch",
"prod": "export NODE_ENV=production && npm run watch",
```
- These scripts will also run `watch`.