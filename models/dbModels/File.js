module.exports = (sequelize , DataTypes) => {
    return sequelize.define('File' , {
        name : {
            type : DataTypes.TEXT,
            primaryKey : true,
            allowNull : false
        },
        url : {
            type : DataTypes.TEXT,
            primaryKey : true,
            allowNull : false
        }
    })
};