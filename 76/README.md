## Experiment 76: Adding the App Component

#### New to Me
- First, we'll create an `App` component. In a new `components` folder, we'll add an `App` folder. In there, we'll add an `index.tsx`:
```tsx
import React from 'react';

const App = () => <div>Hello world!</div>;

export default App;

```
- The root `index.tsx` will also need to import this component now:
```tsx
import React from 'react';
import { render } from 'react-dom';
import App from 'components/App';

render(<App />, document.getElementById('root'));

```
- From here, we can start working with brianzinn's babylonjs-hook package, implement it here, and deconstruct how it works.