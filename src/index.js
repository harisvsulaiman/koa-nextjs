import Koa from "koa";
import compose from "koa-compose";

Koa.prototype.handle = function () {
  const fn = compose(this.middleware);
  return (req, res) => {
    const ctx = this.createContext(req, res);
    return this.handleRequest(ctx, fn);
  };
};

export default Koa;
