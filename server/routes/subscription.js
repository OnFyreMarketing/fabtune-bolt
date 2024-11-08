const express = require('express');
    const stripe = require('stripe')('your_stripe_secret_key'); // Replace with actual Stripe secret key
    const router = express.Router();

    // Create a new subscription
    router.post('/create-subscription', async (req, res) => {
      const { paymentMethodId, customerId } = req.body;

      try {
        const subscription = await stripe.subscriptions.create({
          customer: customerId,
          items: [{ plan: 'your_plan_id' }], // Replace with actual plan ID
          default_payment_method: paymentMethodId
        });

        res.json(subscription);
      } catch (error) {
        res.status(500).json({ error: 'Error creating subscription' });
      }
    });

    module.exports = router;
