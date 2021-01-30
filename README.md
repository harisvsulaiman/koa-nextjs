## Nextjs Koa Compat

### Overview

Use Koa middlewares with Nextjs api routes.

### Getting started

```
yarn add koa-nextjs-compat
```

### Usage

```js
import KoaCompat from "koa-nextjs-compat";

const app = new KoaCompat().use((ctx, next) => {
  ctx.body = "Hello world! 👋🏽";
});

export default app.handle();
```

### Example

See [Shopify Nextjs Starter](https://github.com/harisvsulaiman/shopify-nextjs-template)

### Contributing

We're open to all community contributions! If you'd like to contribute in any way.

### License

MIT
