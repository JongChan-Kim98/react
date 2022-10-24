const Sequelize = require('sequelize');

class user extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            user_id:{
                type: Sequelize.STRING(30),
                allowNull : false,
                unique : true
            },
            user_pw:{
                type: Sequelize.STRING(20),
                allowNull : false,
            },
            user_name:{
                type: Sequelize.STRING(30),
                allowNull : false,
            },
            profilePicture : {
                type : Sequelize.STRING,
                allowNull:true,
                BLOB : true,
                defaultValue : 'https://static.nid.naver.com/images/web/user/default.png?type=s160',
            }
        },
        {
            sequelize,
            timestamps: true,
            modelName : 'User',
            tableName: 'users',
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
}

module.exports = user;