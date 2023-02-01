# tsconfig-paths-test

Demonstrates using `tsconfig-paths/register` with vanilla `node`.

```sh
yarn install --dev
yarn build
yarn test
```

This works by using three configuration settings.

 1. In `tsconfig.json`, we set `"baseUrl": "./src"`.

    This setting ensures that `tsc` build paths don't include `src`

 2. In `tsconfig.json`, we define `paths` to include the mapping `"~/*": ["./*"]`

    This setting allows imports of `~/foo` to resolve to a relative path to `baseUrl`.

 3. In `package.json`, we invoke `node` with the `TS_NODE_BASEURL=./dist` environemtn variable.

    This setting tells `node` to use `./dist` as the `baseUrl` (instead of `./src`).
