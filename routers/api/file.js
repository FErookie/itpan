const file = require('../../controllers/file');
module.exports = (router) => {
    router.post('/fileupload', file.fileupload);
    router.post('/filedownload' , file.filedownload);
};
