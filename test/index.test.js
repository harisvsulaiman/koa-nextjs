// Tests started out from https://github.com/hoangvvo/next-connect/blob/master/test/index.test.js

const { createServer } = require("http");
const request = require("supertest");
const KoaNext = require("../dist");

const METHODS = [
  "get",
  "head",
  "post",
  "put",
  "delete",
  "options",
  "trace",
  "patch",
];

describe("KoaNext", () => {
  it("is chainable", () => {
    const handler = new KoaNext()
      .use((ctx, next) => {
        ctx.body = "sample-body";
        next();
      })
      .use((ctx, next) => {
        ctx.set("2-plus-2-is", "4");
        next();
      })
      .handle();

    const app = createServer(handler);

    return request(app)
      .get("/")
      .expect("2-plus-2-is", "4")
      .expect("sample-body");
  });

  it("supports async handlers", async () => {
    const handler = new KoaNext()
      .use(async (ctx, next) => {
        ctx.set(
          "one",
          await new Promise((resolve) => setTimeout(() => resolve("1"), 1))
        );
        next();
      })
      .handle();
    const app = createServer(handler);
    return await request(app).get("/").expect("one", "1");
  });
});
