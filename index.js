const Koa = require("koa");
const router = require('./routers/index');
const cors = require("koa2-cors");
const koaValidate = require('koa-validate');
let app = new Koa();
//设置跨域
app.use(cors({
    origin: function (ctx) {
        return "*";
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));

app.use(router.allowedMethods());
app.use(router.routes());
koaValidate(app);
module.exports = app;