const db = require('../models/index');
const  {User} = db.models;
exports.addUser = async (name , password)=>{
    await User.create({
        name: name,
        password: password
    })
};