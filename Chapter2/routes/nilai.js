const router = require('express').Router();

router.get('/nilai', (_, res) => {
    res.json({
        status : true,
        message : 'Berhasil Diakses'
    });
});

router.post('/nilai', (_, res) => {
    res.json({
        status : true,
        message : 'Ini adalah method POST Nilai'
    });
}); 

router.put('/nilai', (_, res) => {
    res.json({
        status : true,
        message : 'Ini adalah Method PUT Nilai'
    });
});

router.delete('/nilai', (_, res) => {
    res.json({
        status : true,
        message : 'Ini adalah method DELETE Nilai'
    });
});

module.exports = router;