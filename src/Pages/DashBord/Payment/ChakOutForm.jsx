import { useEffect, useState } from 'react';
import useAuth from '../../../CustomHooks/useAuth';
import useAxiosSecure from '../../../CustomHooks/useAxiosSecure';
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Swal from "sweetalert2";

const ChakOutForm = ({ data }) => {
    const { price } = data;
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [message, setMessage] = useState(null);
    const [clientSecret, setClientSecret] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (!card) {
            return;
        }

        setLoading(true);

        try {
            const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    }
                }
            });

            if (error) {
                setMessage(error.message);
            } else if (paymentIntent.status === 'succeeded') {
                const payment = {
                    userEmail: user?.email,
                    transactionId: paymentIntent.id,
                    price,
                    date: new Date(),
                    availableSeats: data.availableSeats - 1,
                    classImage: data.classImage,
                    className: data.className,
                    instructorEmail: data.instructorEmail,
                    instructorName: data.instructorName,
                    status: "paid",
                    id: data._id,
                    student : Math.floor(Math.random() * 100) + 1
                };

                const response = await axiosSecure.post('/payments', payment);
                console.log(payment);
                if (response.data.insertResult.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your payment has been successfully done',
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            }
        } catch (error) {
            console.log(error);
        }

        setLoading(false);
        setMessage("")
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                    className="w-full h-8 container border border-gray-300 rounded"
                />
                <input type="text" name="" id="" />
            </div>
            <button
                type="submit"
                disabled={!stripe || !clientSecret || loading}
                className="bg-white btn btn-outline text-blue-500 font-semibold py-2 px-4 rounded hover:bg-orange-500 hover:text-white transition-colors duration-300  disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {loading ? 'Processing...' : 'Pay Now'}
            </button>
            {message && <div className="text-red-600">{message}</div>}
        </form>
    );
};

export default ChakOutForm;
