import Koa from "koa";
import CORS from "@koa/cors";
import Router from "./router";
import BodyParser from "koa-bodyparser";
import Mongoose from "mongoose";

Mongoose.Promise = Promise;
Mongoose.set("debug", true);
// Mongoose.connect("mongodb://localhost/monumentum");
Mongoose.connect("mongodb+srv://test123:AzwdwmdboxMxLC1Z@cluster0.pay1o.mongodb.net/MONUMENTUM?retryWrites=true&w=majority");


const app = new Koa();
app.use(CORS());
app.use(BodyParser());
const router = new Router(app);
app.listen(9000);
