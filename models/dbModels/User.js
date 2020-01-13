module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User',{
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },{
        associate: (models) => {
            let {User, Dir , File } = models;

            User.hasMany(Dir);
            Dir.belongsTo(User);
            User.hasMany(File);
            File.belongsTo(User);
        }
    })
};
