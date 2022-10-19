const Sequelize = require('sequelize');

class border extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            postId: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                unique: true,
            },
            title : {
                type : Sequelize.STRING(100), 
                allowNull : false, 
            },
            content : {
                type : Sequelize.TEXT, 
                allowNull: false,
            }
        },
        {
            sequelize,
            timestamps: true,
            modelName : 'Border',
            tableName: 'borders',
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
    
    static associate(db){
        db.Border.belongsTo(db.User, {foreignKey : "writer", targetKey : "nickName"});
    }

}

module.exports = border;