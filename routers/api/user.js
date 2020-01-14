const user = require('../../controllers/user');
module.exports = (router) => {
    router.post('/login', user.login);
};
