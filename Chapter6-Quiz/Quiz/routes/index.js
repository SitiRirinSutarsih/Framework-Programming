const router = require('express').Router();
const product = require('./product');
const customer = require('./customer');
const transaction = require('./transaction');
const dashboard = require('./dashboard')

router.use('/product', product);
router.use('/customer', customer);
router.use('/transaction', transaction);
router.use('/dashboard', dashboard);

module.exports = router