// require('dotenv').config();

const express = require('express');
const app = express();
const routes = require('./routes');
const user = require('./routes/user');
const dosen = require('./routes/dosen')
const karyawan = require('./routes/karyawan')
const kuliah = require('./routes/kuliah')
const mahasiswa = require('./routes/mahasiswa')
const matkul = require('./routes/matkul')
const nilai = require('./routes/nilai')
const pengajar = require('./routes/pengajar')
const praktikum = require('./routes/praktikum')

//app.use(express.json());

app.use([routes, user, dosen, karyawan, kuliah, mahasiswa, matkul, nilai, pengajar, praktikum]);

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})