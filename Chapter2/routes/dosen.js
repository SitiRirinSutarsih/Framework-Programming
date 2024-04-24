const router = require('express').Router();

router.get('/dosen', (_, res) => {
    res.json({
        status : true,
        message : 'Berhasil Diakses'
    });
});

router.post('/dosen', (_, res) => {
    res.json({
        status : true,
        message : 'Ini adalah method POST Dosen'
    });
}); 

router.put('/dosen', (_, res) => {
    res.json({
        status : true,
        message : 'Ini adalah Method PUT Dosen'
    });
});

router.delete('/dosen', (_, res) => {
    res.json({
        status : true,
        message : 'Ini adalah method DELETE Dosen'
    });
});

module.exports = router;