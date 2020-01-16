const db = require('../models/index');
const  {User} = db.models;

async function addUser(name , password){
    await User.create({
        name: name,
        password: password
    })
};
let userHandle = {
    addUser:addUser
};
module.exports = userHandle;