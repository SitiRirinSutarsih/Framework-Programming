const router = require('express').Router();

router.get('/user', (_, res) =>  {
    res.json({
        status : true,
        message : 'Berhasil Diakses'
    });
});

router.post('/user', (_, res) => {
    res.json({
        status : true,
        message : 'Ini adalah method POST User'
    });
});

router.put('/user', (_, res) => {
    res.json({
        status : true,
        message : 'Ini adalah method PUT User'
    });
});

router.delete('/user', (_, res) => {
    res.json({
        status : true,
        message:  'Ini adalah method DELETE User'
    });
});

module.exports = router;