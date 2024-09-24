# docker-vite-vitest-ts-react

Step By Step Guide to Dockerize React App Created Using Vite + Vitest

## Quick ViteJS React TypeScript Vitest

This is a quick base code for setting up [Vitest](https://vitest.dev) tests for our ViteJS project for React and TypeScript.

**NOTE:** This scaffolded project is based on [ViteJS React TypeScript Template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts), and on this article [Quick Vitest Setup With ViteJS, React, & TypeScript](https://codingwithmanny.medium.com/quick-vitest-setup-with-vitejs-react-typescript-bea9d3a01b07).

## Requirements

- node `v18.18.2`

## Setup

Install dependencies:

```bash
# FROM ./

npm install
```

Run tests:

```bash
# FROM ./

npm test
```

## Tests

These are the main files used for testing.

Main test file:

- `src/__tests__/App.test.tsx`

Main vite config file

- `vite.config.ts`

Main vitest setup file to extend jest

- `vitest.setup.ts`

## Docker Unleashed - Build, Ship and Run

- [Docker Hub: Publisher](https://medium.com/platformer-blog/lets-publish-a-docker-image-to-docker-hub-using-a-github-action-f0b17e5cceb3)
- [GitHub: Subscriber](https://betterstack.com/community/guides/scaling-nodejs/dockerize-nodejs/)

## Fixture:

- [mrm](https://www.npmjs.com/package/mrm) - Command line tool to help you keep configuration (package.json, .gitignore, .eslintrc, etc.) of your open source projects in sync.

## Next Steps - Code Review

- Vite
- React
- ESL & Prettier
- React-Router-DOM
- React-Markdown
- Remark-GFM
- Redux
- Node
- Express
- Fetch
- Tanstack
- Vanilla-Extract CSS-in-TS
- Axios
- Vitest
- TypeScript
- Docker
- Kubernetes
- NGINX
- Helm
