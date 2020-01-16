exports.fileupload = async (ctx) => {
    console.log(ctx.request);
    ctx.body = "hello world";
};
exports.filedownload = async (ctx) => {
    console.log(ctx.request);

};