const db = require('../models/index');
const {User , Dir} = db.models;

async function createDir(userId , dirName){

}
async function deleteDir(userId , dirName){

}

let dirHandle = {
    createDir: createDir,
    deleteDir: deleteDir
};
module.exports = userHandle;