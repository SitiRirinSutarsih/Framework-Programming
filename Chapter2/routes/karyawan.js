const router = require('express').Router();

router.get('/karyawan', (_, res) => {
    res.json({
        status : true,
        message : 'Berhasil Diakses'
    });
});

router.post('/karyawan', (_, res) => {
    res.json({
        status : true,
        message : 'Ini adalah method POST Karyawan'
    });
}); 

router.put('/karyawan', (_, res) => {
    res.json({
        status : true,
        message : 'Ini adalah Method PUT Karyawan'
    });
});

router.delete('/karyawan', (_, res) => {
    res.json({
        status : true,
        message : 'Ini adalah method DELETE Karyawan'
    });
});

module.exports = router;