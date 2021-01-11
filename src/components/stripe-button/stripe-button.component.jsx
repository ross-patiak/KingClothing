import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51I7dcQD6HSiT2V8y23LZ59CLFXWXlUkQRc5HSSVJ26hLtRF2gfN6w2pJM7CixWIOVxrQOSS01xMWSqphY39Ln0qk00eFakWwA2';

  const onToken = token => {
    console.log(token);
    //if real payment, this token would be passed to the backend to process payment
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='KING Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
