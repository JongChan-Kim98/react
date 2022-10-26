const Sequelize = require('sequelize');

// 쫑찬아 이거 모델명은 대문자로 적고 테이블 명은 소문자 복수형으로 적는게 통상적인 약속이래~~~ 참고하던지 말던지
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