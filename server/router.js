import KoaRouter from "koa-router";
import Items from "./models/items";

export default class Router {
  constructor(app) {
    this.app = app;
    this.router = new KoaRouter();
    this.init();
    this.routes();
  }

  init() {
    this.app.use(this.router.routes());
  }

  routes() {
    const items = new Items();
    this.router.get("/api/items", async (ctx, next) => {
      ctx.body = await items.getItems();
    });
    this.router.get("/api/items/:id", async (ctx, next) => {
      ctx.body = await items.getItem(ctx);
    });
    this.router.post("/api/items", async (ctx, next) => {
      ctx.body = await items.addItem(ctx);
    });
    this.router.put("/api/items/:id", async (ctx, next) => {
      ctx.body = await items.updateItem(ctx);
    });
    this.router.delete("/api/items/:id", async (ctx, next) => {
      console.log("ctx.params", ctx.params);
      ctx.body = await items.removeItem(ctx);
    });
    this.router.post("/api/test", async (ctx, next) => {
      ctx.body = "Hello";
    });
  }
}
