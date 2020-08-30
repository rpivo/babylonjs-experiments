## Experiment 60: Babylon.js, React, & TypeScript - Installing Dependencies

#### New to Me
- To set up Babylon with React & TypeScript, we need to first install Babylon, React, and TypeScript:
```sh
npm install @babylonjs/core react react-dom typescript
```
- We will need to add a tsconfig for TypeScript.
```json
{
  "compilerOptions": {
    "baseUrl": "./src",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "jsx": "react",
    "module": "esnext",
    "moduleResolution": "node",
    "noImplicitReturns": true,
    "resolveJsonModule": true,
    "strict": true,
    "target": "ES2019",
  }
}
```