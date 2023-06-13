import "./Payment.css"

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'
import ChackOutForm from '../StudentDashbord/MySelectedClass/ChackOutForm';
const ELEMENTS_OPTIONS = {
    fonts: [
        {
            cssSrc: 'https://fonts.googleapis.com/css?family=Roboto',
        },
    ],
};
const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
const Payment = () => {
    return (
        <div className="AppWrapper">
            <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
                <ChackOutForm></ChackOutForm>
            </Elements>
        </div>
    );
};

export default Payment;