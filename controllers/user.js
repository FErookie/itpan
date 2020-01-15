exports.login = async (ctx) => {
    console.log(ctx.request);
    ctx.body = "hello world";
};
exports.register = async (ctx) => {
    console.log(ctx.request);
}