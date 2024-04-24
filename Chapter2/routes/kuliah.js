const router = require('express').Router();

router.get('/kuliah', (_, res) => {
    res.json({
        status : true,
        message : 'Berhasil Diakses'
    });
});

router.post('/kuliah', (_, res) => {
    res.json({
        status : true,
        message : 'Ini adalah method POST Kuliah'
    });
}); 

router.put('/kuliah', (_, res) => {
    res.json({
        status : true,
        message : 'Ini adalah Method PUT Kuliah'
    });
});

router.delete('/kuliah', (_, res) => {
    res.json({
        status : true,
        message : 'Ini adalah method DELETE Kuliah'
    });
});

module.exports = router;