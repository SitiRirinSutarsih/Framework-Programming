const router = require('express').Router();

router.get('/', function (_, res) {
    res.json({
        status : true,
        message : 'Berhasil Diakses'
    });
});

router.post('/', (_, res) => {
    res.json({
        status : true,
        message : 'Ini adalah method POST'
    });
});

router.put('/', (_, res) => {
    res.json({
        status : true,
        message : 'Ini adalah method PUT'
    });
});

router.delete('/', (_, res) => {
    res.json({
        status : true,
        message : 'Ini adalah method DELETE'
    });
});

module.exports = router;