const Koa = require("koa");
const router = require('./routers/index');
const cors = require("koa2-cors");
const koaValidate = require('koa-validate');
const koaJwt = require("koa-jwt");
const jwt = require("jsonwebtoken");

//设置跨域
let app = new Koa();
app.use(cors({
    origin: function (ctx) {
        return "*";
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['*'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));

app.use(router.allowedMethods());
app.use(router.routes());
koaValidate(app);
module.exports = app;