const dir = require('../../controllers/dir');
module.exports = (router) => {
    router.post('/createDir', dir.createDir);
    router.post('/deleteDir' , dir.deleteDir);
};
