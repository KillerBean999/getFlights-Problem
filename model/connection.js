const mysql2 = require('mysql2')
require('dotenv').config()

const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '5534348Erik!',
    database: 'flightsdb'
})
//KNEX is query builder for node.js
const knex = require('knex').knex({
  client: 'mysql2',
  connection: {
    host : 'localhost',
    port : '3306',
    user : 'root',
    password : '5534348Erik!',
    database : 'flightsdb'
  }
});
// const knex = require('knex').knex({
//   client: 'mysql2',
//   connection: {
//     host : process.env.host,
//     port : process.env.port,
//     user : 'root',
//     password : process.env.password,
//     database : process.env.database
//   }
// });

connection.connect((err)=>{     
    if (err) {
        console.log(err);
    } else {
        console.log("connected to the database");
    }
})

module.exports={
    connection,
    knex
}