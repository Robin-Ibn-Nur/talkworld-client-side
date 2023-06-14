import { useLoaderData } from "react-router-dom";
import PaymentFor from "./PaymentFor";
import ChakOutForm from "./ChakOutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const data = useLoaderData();

    
    return (
        <div>
            <h1>Your will be payfor</h1>
            <div className="container my-5 hidden">
                <PaymentFor data={data}></PaymentFor>
            </div>

            <Elements stripe={stripePromise}>
                <ChakOutForm data={data}></ChakOutForm>
            </Elements>
        </div>
    );
};

export default Payment;