

const Sequelize = require('sequelize');

// conexão banco de dandos PostgreSQL
const sequelize = new Sequelize('postapp', 'postgres', '123', {
    host: "localhost",
    dialect: "postgres",
    query: {raw:true}
});


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}