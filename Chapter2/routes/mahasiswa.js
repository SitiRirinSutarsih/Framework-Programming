const router = require('express').Router();

router.get('/mahasiswa', (_, res) => {
    res.json({
        status : true,
        message : 'Berhasil Diakses'
    });
});

router.post('/mahasiswa', (_, res) => {
    res.json({
        status : true,
        message : 'Ini adalah method POST mahasiswa'
    });
}); 

router.put('/mahasiswa', (_, res) => {
    res.json({
        status : true,
        message : 'Ini adalah Method PUT mahasiswa'
    });
});

router.delete('/mahasiswa', (_, res) => {
    res.json({
        status : true,
        message : 'Ini adalah method DELETE mahasiswa'
    });
});

module.exports = router;