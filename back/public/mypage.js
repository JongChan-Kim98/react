const Sequelize = require('sequelize');

class mypage extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            user_id : {
                type: Sequelize.STRING(30),
                allowNull : true,
                unique : false
            },
            tag1 : {
                type: Sequelize.STRING(20),
                allowNull : true,
                unique : true,
            },
            tag2 : {
                type: Sequelize.STRING(20),
                allowNull : true,
                unique : true,
            },
            tag3 : {
                type: Sequelize.STRING(20),
                allowNull : true,
                unique : true,
            },
            tag4 : {
                type: Sequelize.STRING(20),
                allowNull : true,
                unique : true,
            },
            tag5 : {
                type: Sequelize.STRING(20),
                allowNull : true,
                unique : true,
            },
            tag6 : {
                type: Sequelize.STRING(20),
                allowNull : true,
                unique : true,
            },
            tag7 : {
                type: Sequelize.STRING(20),
                allowNull : true,
                unique : true,
            },
            tag8 : {
                type: Sequelize.STRING(20),
                allowNull : true,
                unique : true,
            },
            tag9 : {
                type: Sequelize.STRING(20),
                allowNull : true,
                unique : true,
            },
            tag10 : {
                type: Sequelize.STRING(20),
                allowNull : true,
                unique : true,
            },
            tag11 : {
                type: Sequelize.STRING(20),
                allowNull : true,
                unique : true,
            },
            tag12 : {
                type: Sequelize.STRING(20),
                allowNull : true,
                unique : true,
            }
        },
        {
            sequelize,
            timestamps: true,
            modelName : 'Mypage',
            tableName: 'mypages',
            charset:'utf8',
            collate:'utf8_general_ci'
        })
    }
}

module.exports = mypage;