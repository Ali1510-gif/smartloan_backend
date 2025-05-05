const express = require('express');
const Razorpay = require('razorpay');
const router = express.Router();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

router.post('/pay', (req, res) => {
  const { amount } = req.body;
  razorpay.orders.create({ amount: amount * 100, currency: 'INR', receipt: 'receipt#1' })
    .then(order => res.json(order))
    .catch(err => res.status(500).json({ message: 'Payment failed' }));
});

module.exports = router;
