const router = require('express').Router();

router.get('/praktikum', (_, res) => {
    res.json({
        status : true,
        message : 'Berhasil Diakses'
    });
});

router.post('/praktikum', (_, res) => {
    res.json({
        status : true,
        message : 'Ini adalah method POST Praktikum'
    });
}); 

router.put('/praktikum', (_, res) => {
    res.json({
        status : true,
        message : 'Ini adalah Method PUT Praktikum'
    });
});

router.delete('/praktikum', (_, res) => {
    res.json({
        status : true,
        message : 'Ini adalah method DELETE Praktikum'
    });
});

module.exports = router;