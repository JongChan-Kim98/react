const Sequelize = require('sequelize');

class border extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            postId: {
                type: Sequelize.INTEGER(100),
                primaryKey: true,
                autoIncrement: true,
                unique: true,
            },
            title : {
                type : Sequelize.STRING(100), 
                allowNull : true, 
            },
            content : {
                type : Sequelize.TEXT, 
                allowNull: true,
            },
            user_id : {
                type: Sequelize.STRING(30),
                allowNull : true,
                unique : false
            },
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
}

module.exports = border;