import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import ResetButton from "../../Payment/ResetButton";
import CardField from "../../Payment/CardField";
import ErrorMessage from "../../Payment/ErrorMessage";
import SubmitButton from "../../Payment/SubmitButton";


const ChackOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [cardComplete, setCardComplete] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [billingDetails, setBillingDetails] = useState({
        email: '',
        phone: '',
        name: '',
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        if (error) {
            card.focus();
            return;
        }

        if (cardComplete) {
            setProcessing(true);
        }

        const payload = await stripe.createPaymentMethod({
            type: 'card',
            card,
            billing_details: billingDetails,
        });

        setProcessing(false);

        if (payload.error) {
            setError(payload.error);
        } else {
            setPaymentMethod(payload.paymentMethod);
        }
    };

    const reset = () => {
        setError(null);
        setProcessing(false);
        setPaymentMethod(null);
        setBillingDetails({
            email: '',
            phone: '',
            name: '',
        });
    };

    return paymentMethod ? (
        <div className="Result">
            {/* Payment success message */}
            <ResetButton onClick={reset} />
        </div>
    ) : (
        <form className="Form" onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
                {/* Fields for name, email, and phone */}
            </fieldset>
            <fieldset className="FormGroup">
                <CardField
                    onChange={(e) => {
                        setError(e.error);
                        setCardComplete(e.complete);
                    }}
                />

            </fieldset>
            {error && <ErrorMessage>{error.message}</ErrorMessage>}
            <SubmitButton processing={processing} error={error} disabled={!stripe}>
                Pay $25
            </SubmitButton>
        </form>
    );
};

export default ChackOutForm;