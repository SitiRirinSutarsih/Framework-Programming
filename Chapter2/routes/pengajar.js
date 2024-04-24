const router = require('express').Router();

router.get('/pengajar', (_, res) => {
    res.json({
        status : true,
        message : 'Berhasil Diakses'
    });
});

router.post('/pengajar', (_, res) => {
    res.json({
        status : true,
        message : 'Ini adalah method POST Pengajar'
    });
}); 

router.put('/pengajar', (_, res) => {
    res.json({
        status : true,
        message : 'Ini adalah Method PUT Pengajar'
    });
});

router.delete('/pengajar', (_, res) => {
    res.json({
        status : true,
        message : 'Ini adalah method DELETE Pengajar'
    });
});

module.exports = router;