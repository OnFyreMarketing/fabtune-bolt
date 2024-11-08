import React, { useState } from 'react';

    function SubscriptionForm() {
      const [paymentMethodId, setPaymentMethodId] = useState('');
      const [customerId, setCustomerId] = useState('');

      const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/subscription/create-subscription', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ paymentMethodId, customerId })
        });
        const data = await response.json();
        console.log(data);
      };

      return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Payment Method ID"
            value={paymentMethodId}
            onChange={(e) => setPaymentMethodId(e.target.value)}
          />
          <input
            type="text"
            placeholder="Customer ID"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
          />
          <button type="submit">Subscribe</button>
        </form>
      );
    }

    export default SubscriptionForm;
