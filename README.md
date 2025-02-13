# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# ESLINT AND PRETTIER INSTALLATION (NUXT)

1. INSTALL ESLINT AND TS

- npm install -D @nuxt/eslint eslint typescript

2. INSTALL PRETTIER AND THE CONF TO AVOID CONFLICS

- npm install -D eslint-plugin-prettier eslint-config-prettier prettier

3. CONFIG nuxt.config.ts

```
 modules: [
    '@nuxt/eslint', // 🔥 Activa ESLint en Nuxt
  ],
```

4. Run to create eslint.config.mjs automaticaly

- npm run dev

5. Open package.json adn add on scripts

```
"scripts": {
  "lint": "npm run lint:eslint && npm run lint:prettier",
  "lint:eslint": "eslint .",
  "lint:prettier": "prettier . --check",
  "lintfix": "eslint . --fix && prettier --write ."
}
```

6. install or activate the extensions

```
code --install-extension esbenp.prettier-vscode
code --install-extension dbaeumer.vscode-eslint

```

6. formating on save conf (settings.js)-> VSCODE

```
{
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": "explicit"
    }
}
```

more info on -[https://dev.to/tao/adding-eslint-and-prettier-to-nuxt-3-2023-5bg]
