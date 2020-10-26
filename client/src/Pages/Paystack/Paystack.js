import React, { useState } from 'react';
import { PaystackButton } from 'react-paystack'
import './Paystack.scss';

const Paystack = (props) => {
  const publicKey = "pk_test_229c380a24cd09ddd6965f020ee67af6356f356d"
  const amount = 2000000 // Remember, set in kobo!
  const [name, setCardName] = useState('');
  const [phone, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

    const componentProps = {
        email,
        amount,
        metadata: {
          name,
          phone,
        },
        publicKey,
        text: "Pay Now With Paystack",
        onSuccess: () =>
          alert("Thanks for doing business with us! Come back soon!!"),
        onClose: () => alert("Wait! You need this oil, don't go!!!!"),
      }

  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='checkout'>
          <div className='content'>
            <h3 className='card-details'>Card Details</h3>
            <div className='card-type'>
              <p className='card-type-text'>Card Type</p>
              <div className='card-design'>
                <div className='smart-card'>
                  <div className='card-details'>
                    <span style={{ fontSize: 24 }}>VISA</span>
                    <span>4242 4242 4242 4242</span>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}
                      className='flex-details'
                    >
                      <span>CIROMA ADEKUNLE CHUKWUMA</span>
                      <span
                        style={{ width: 70, fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      ></span>
                    </div>
                  </div>
                </div>
                <div className='mastercard'>
                  <i className='mastercard-icon'></i>
                  <span>mastercard</span>
                </div>
              </div>
            </div>
            <div>
              <form>
                <label className='card-type-text' htmlFor='name'>
                  Name on Card
                </label>
                <input
                  className='credit-card'
                  id='name'
                  value={name}
                  onChange={e => setCardName(e.target.value)}
                  placeholder='CIROMA ADEKUNLE CHUKWUMA'
                  type='text'
                  required
                />

                <label className='card-type-text' htmlFor='ccn'>
                  Phone Number:
                </label>
                <input
                  className='credit-card'
                  id='ccn'
                  value={phone}
                  onChange={e => setPhoneNumber(e.target.value)}
                  type='tel'
                  inputMode='numeric'
                  maxLength='11'
                  placeholder='080F OLD ABLES'
                ></input>


                <label className='card-type-text' for='ccn'>
                  Email Address:
                </label>
                <input
                  className='credit-card'
                  id='ccn'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  type='email'
                  placeholder='buycakes@foldables.com'
                ></input>
              </form>
            <PaystackButton className='checkout-btn' {...componentProps} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Paystack