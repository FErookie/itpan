module.exports = (sequelize , DataTypes) => {
    return sequelize.define('Dir' , {
        name : {
            type : DataTypes.TEXT,
            primaryKey : true
        }
    },{
        associate : (models)=>{
            let {Dir , File} = models;
            Dir.hasMany(File);
            File.belongsTo(Dir);
        }
    })
};