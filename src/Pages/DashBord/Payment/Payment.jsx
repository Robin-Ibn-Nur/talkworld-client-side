import { useLoaderData } from "react-router-dom";
import PaymentFor from "./PaymentFor";
import ChakOutForm from "./ChakOutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const data = useLoaderData();
    console.log(data);

    return (
        <div className="container font-serif grid sm:grid-cols-1 lg:grid-cols-2 lg:items-center gap-5">
            <div>
                <PaymentFor data={data}></PaymentFor>
            </div>

            <div className="text-center space-y-5">
                <h1 className="text-2xl font-bold ">Payment Through online</h1>
                <Elements stripe={stripePromise}>
                    <ChakOutForm data={data}></ChakOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;