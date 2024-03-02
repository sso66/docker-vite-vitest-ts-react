# docker-vite-vitest-ts-app

Step By Step Guide to Dockerize React App Created Using Vite + Vitest

## Quick ViteJS React TypeScript Vitest

This is a quick base code for setting up [Vitest](https://vitest.dev) tests for our ViteJS project for React and TypeScript.

**NOTE:** This scaffolded project is based on [ViteJS React TypeScript Template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts).

This code is based on the article [Quick Vitest Setup With ViteJS, React, & TypeScript](https://codingwithmanny.medium.com/quick-vitest-setup-with-vitejs-react-typescript-bea9d3a01b07).

![Quick Vitest Setup With ViteJS, React, & TypeScript](./README/article.png)

## Requirements

- node `v18.18.2`

## Setup

Install dependencies:

```bash
# FROM ./

npm install;
```

Run tests:

```bash
# FROM ./

npm test;
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

- [Docker Hub](https://medium.com/platformer-blog/lets-publish-a-docker-image-to-docker-hub-using-a-github-action-f0b17e5cceb3)
- [GitHub](https://betterstack.com/community/guides/scaling-nodejs/dockerize-nodejs/)
  
## Next Steps
- Kubernetes
- NGINX
- Helm