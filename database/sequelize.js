const Sequelize = require("sequelize");

const sequelize = new Sequelize(
   'mydb',
   'ron',
   'alligator',
    {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        socketPath: '/var/run/mysqld/mysqld.sock'
      }
    }
  );

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

module.exports = sequelize;