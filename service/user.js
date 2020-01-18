const db = require('../models/index');
const  {User} = db.models;

async function addUser(name , password){
    await User.create({
        name: name,
        password: password
    })
}
async function findUser(name , password){
    await User.findOne({
        where:{
            name : name,
            password : password
        }
    }).then(data => {
        return data === undefined;
    });
}
async function updateUser_info(name , password , newname , newpassword){
    let id = await User.findOne({
        attributes:['id'],
        where:{
            name : name ,
            password : password
        }
    });
    await User.update({
        name,
        password
    }, {
        where:{
            id : id
        }
    });
}
let userHandle = {
    addUser: addUser,
    checkIn: findUser,
    updateUser_info : updateUser_info
};
module.exports = userHandle;