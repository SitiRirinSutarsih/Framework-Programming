const router = require('express').Router();
const transaction = require('../controllers/transaction');
const transaksi = require('../controllers/transaction');

router.post('/', transaction.create);
router.get('/', transaction.showAll);
router.get('/tampil/:id', transaction.showById);
router.put('/:id', transaction.update);
router.delete('/:id', transaction.delete);

module.exports = router