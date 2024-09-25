var mysql = require('mysql2');
const express = require('express');
const app = express()


//buat koneksi database
const conn = mysql.createConnection ({
    host:'localhost',
    user:'root',
    password:'',
    database:'dbrestapi'

} );

conn.connect((err)=>{
    if(err) throw err;
    console.log('Mysql terkoneksi');
});

module.exports = conn;

app.get('/ambildata', (req, res) => {
    try {
        conn.query('SELECT * FROM mahasiswa', (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json(results);
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


