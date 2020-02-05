const userHandle = require('../service/user');
exports.login = async (ctx) => {
    console.log(ctx);
    ctx.body = "hello world";
};
exports.register = async (ctx) => {
    console.log(ctx.request);
    await userHandle.addUser("gaoshuda" , "gsd741741");
};