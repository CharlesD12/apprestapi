var mysql = require('mysql2');

//buat koneksi database
const conn = mysql.createConnection({
    host: '127.0.0.1', 
    port: 3307,
    user: 'root',
    password:'', //MASUKKAN PASSWORD
    database: 'dbrestapi'
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('Mysql terkoneksi');
});

module.exports = conn;
