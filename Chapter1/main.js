const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = 3000;
const mariadb = require('mariadb');
app.use(bodyParser.json());

const connection = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'praktikum'
});

app.get('/' ,(req, res) =>{
    res.send('Ini Method Get');
});

app.post('/', (req, res) =>{
    res.send('Ini Method Post');
});

app.get('/mahasiswa', async(req, res) =>{
    try {
        conn = await connection.getConnection();
        const data = await conn.query('SELECT * FROM mahasiswa');
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.post('/mahasiswa', async(req, res) =>{
    try {
        conn = await connection.getConnection();
        const{nama, alamat, prodi} = req.body;
        if (!nama||!alamat||!prodi) {
            res.status(404).send('Data Tidak Boleh Kosong');
        } else {
            conn.query(`INSERT INTO mahasiswa (nama, alamat, prodi) VALUES (?,?,?)`,[nama,alamat,prodi]);
            res.status(200).send('Data Berhasil Di Tambah'); 
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(port, () => {
    console.log('example app listening on port : ' + port);
});