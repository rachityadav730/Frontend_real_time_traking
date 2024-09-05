// src/components/DeliveryTracker.js
import React, { useState, useEffect } from 'react';
import actionCable from 'actioncable';

const DeliveryTracker = ({ orderId }) => {
  const [status, setStatus] = useState('pending');
  const [deliveryStatus, setDeliveryStatus] = useState('not_started');

  useEffect(() => {
    const cable = actionCable.createConsumer('ws://localhost:3000/cable');
    const subscription = cable.subscriptions.create(
      { channel: 'DeliveryChannel', order_id: orderId },
      {
        received: (data) => {
          setStatus(data.status);
          setDeliveryStatus(data.delivery);
        },
      }
    );
    return () => {
      subscription.unsubscribe();
    };
  }, [orderId]);

  return (
    <div>
      <h3>Order Status: {status}</h3>
      <h4>Delivery Status: {deliveryStatus}</h4>
    </div>
  );
};

export default DeliveryTracker;
