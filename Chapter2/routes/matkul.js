const router = require('express').Router();

router.get('/matkul', (_, res) => {
    res.json({
        status : true,
        message : 'Berhasil Diakses'
    });
});

router.post('/matkul', (_, res) => {
    res.json({
        status : true,
        message : 'Ini adalah method POST Matkul'
    });
}); 

router.put('/matkul', (_, res) => {
    res.json({
        status : true,
        message : 'Ini adalah Method PUT Matkul'
    });
});

router.delete('/matkul', (_, res) => {
    res.json({
        status : true,
        message : 'Ini adalah method DELETE Matkul'
    });
});

module.exports = router;