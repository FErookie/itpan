const userHandle = require('../service/user');
exports.login = async (ctx) => {
    console.log(1);
    console.log(ctx);
    ctx.body = {
        name: "新建文件夹2",
        type: "dir"
    };
};
exports.register = async (ctx) => {
    console.log(ctx.request);
    await userHandle.addUser("gaoshuda" , "gsd741741");
};