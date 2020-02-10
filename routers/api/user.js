const user = require('../../controllers/user');
module.exports = (router) => {
    router.post('/public/login', user.login);//登陆路由起码应该包括分发token 向redis中存储 和登陆工作
    router.post('/public/register' , user.register);
};
