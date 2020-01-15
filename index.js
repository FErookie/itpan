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
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));

app.use(router.allowedMethods());
//设置token密钥
const jwtSecert = 'jwtSecret';
const tokenExpiresTime = 1000 * 60 * 60 * 24 * 7;
app.use(function (ctx , next) {
    return next().catch(err => {
        if(401 == err.status){
            ctx.status = 401;
            ctx.body = " protected resource , use Authorization header to get access\n";
        }else{
            throw err;
        }
    });
});
app.use(koaJwt({secret: jwtSecert}).unless({
    path:["/^\/login" , "/^\/register"]
}));
app.use(router.routes());
koaValidate(app);
module.exports = app;