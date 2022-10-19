// 설치해야할것 sequelize, mysql2 둘다 설치
// npm i sequelize mysql2
const Sequelize = require('sequelize');
const config = require('../config');
const border = require('./border');
const user = require('./user');

const sequelize = new Sequelize(
    config.dev.database,
    config.dev.username,
    config.dev.password,
    config.dev
)

const db = {};

db.sequelize = sequelize;
db.user = user;
db.border = border;



user.init(sequelize);
border.init(sequelize);

// user.associate(db);
// border.associate(db);


module.exports = db;
