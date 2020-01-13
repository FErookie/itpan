const fs = require('fs');
const path = require('path');
exports.autoimport = (nextpath , callback) => {
    let isDir = fs.statSync(nextpath).isDirectory();
    if(isDir){
        fs
            .readdirSync(nextpath)
            .filter((file)=>{
                return file !== "index.js" && file !== "migrate.js" && file.indexOf(".") !== 0;
            }) .forEach((filename)=> {
                let tmpPath = path.join(nextpath , filename);
                if(fs.statSync(tmpPath).isDirectory()){
                    autoimport(tmpPath , callback);
                }else{
                    callback(tmpPath);
                }
            })
    }
};