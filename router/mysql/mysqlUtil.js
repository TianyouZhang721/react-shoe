const mysql = require('mysql');

 const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'shoe',
    port: 3306,
    connectionLimit: 5
});

let query = function(sql, params, cb){
    if(typeof params ==='function'){
        cb = params;
        params = undefined;
    }
   pool.getConnection(function(err, conn){
       if (err) console.log('xxxxxx');
       conn.query(sql, params, function(err, data, fields){
         cb(err, data);
       })
       conn.release();
   })
}

module.exports = query;