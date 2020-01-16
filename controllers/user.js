const userHandle = require('../service/user');
exports.login = async (ctx) => {
    console.log(ctx.request);
    ctx.body = "hello world";
};
exports.register = async (ctx) => {
    console.log(ctx.request);
    await userHandle.addUser("gaoshuda" , "gsd741741");
};