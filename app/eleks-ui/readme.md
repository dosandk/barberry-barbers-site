## ELEKS UI

## Init ELEKS UI in your project

> [NOTE]: You need to init project by [vite](https://vite.dev/guide/)  
> You will free to use any other build system, but guide explains how to make configuration for vite.

1. Add "eleks-ui" to your components directory, for example: "src/components/eleks-ui"

```bash
src/
├── components/
│   └── eleks-ui/
│       ├── components/
│       │   ├── core/
│       │   ├── x-components/
│       │   └── custom/
│       └── theme/
│
```

2. Update "tsconfig.json" file

- Add alias for "eleks-ui" components imports to "tsconsfig.json" in the the "paths" section:

```js
// tsconfig.json

"compilerOptions": {
  "verbatimModuleSyntax": false,
  "paths": {
    "@eleks-ui/components": [
      "src/components/eleks-ui/components/index.tsx"
    ],
    "@eleks-ui/theme": [
      "src/components/eleks-ui/theme/index.tsx"
    ]
  }
}
```

- IMPORTANT: Check that `verbatimModuleSyntax` has `false` value

3. Update alias in "vite.config.ts" file, or add alias to the config inside other build system config file:

```js
// vite.config.ts

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      '@eleks-ui/components': path.resolve(
        dirname,
        './src/components/eleks-ui/components'
      ),
      '@eleks-ui/theme': path.resolve(
        dirname,
        './src/components/eleks-ui/theme'
      )
    }
  }
});
```

4. Install "npm" dependencies:

MUI dependencies:

```bash
npm install \
  @mui/material@^7.0.1 \
  @emotion/react@^11.14.0 \
  @emotion/styled@^11.14.0 \
  @mui/icons-material@^7.0.1 \
  @mui/lab@^7.0.0-beta.10 \
  @mui/x-charts@^7.28.0 \
  @mui/x-data-grid@^8.3.0 \
  @mui/x-date-pickers@^7.28.3 \
  @mui/x-date-pickers-pro@^7.28.3 \
  @mui/x-tree-view@^7.28.1 \
  dayjs@^1.11.13
```

5. Reload build system and test components usage:

```tsx
import { Avatar, Button } from '@eleks-ui/components';
import { ArrowDownward, AccessAlarmOutlined } from '@mui/icons-material';

function App() {
  return (
    <>
      <Avatar>AV</Avatar>
      <Button>Click me baybe!</Button>

      <ArrowDownward />
      <AccessAlarmOutlined />
    </>
  );
}

export default App;
```

## Add ELEKS UI theme to your project

1. Add `EleksUIThemeProvider` to the root of your application:

```tsx
// main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { EleksUIThemeProvider } from '@eleks-ui/theme';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EleksUIThemeProvider>
      <App />
    </EleksUIThemeProvider>
  </StrictMode>
);
```

2. Add `ThemeSwitcher` component to toggle between light and dark themes:

```tsx
// ThemeSwitcher.tsx
import { useEleksUITheme } from '@eleks-ui/theme';

const ThemeSwitcher = () => {
  const { mode, toggleTheme } = useEleksUITheme();

  return (
    <button onClick={toggleTheme}>
      Switch to {mode === 'dark' ? 'light' : 'dark'}
    </button>
  );
};
```
