const express = require('express');
const path = require('path');
const shopController = require('../controllers/shop_controller');

const router = express.Router();

// done
router.get('/', shopController.getAllProducts);

// to do
router.get('/products/:prodId', shopController.getProductDetail);

// done
router.post('/add-to-cart', shopController.addToCart);

// done
router.get('/cart/:user_id', shopController.getCart);

// done
router.delete('/delete/:coinName', shopController.deleteInCart);

module.exports = router;
