import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";

const ContactInfo = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        Swal.fire({
            title: 'Sweet!',
            text: `Thank you ${data.name} for contact with us we will get back to you soon`,
            imageUrl: 'https://www.maxpixel.net/static/photo/2x/Happy-Emoji-Smile-Happy-Face-Yellow-Happiness-5865208.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })
        reset()

    };

    return (
        <div className="bg-gray-200 p-8 rounded-lg my-5">
            <h2 className="text-2xl font-bold mb-4">Contact TalkWorld</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700"
                        placeholder="Enter your name"
                        {...register('name')}
                    />

                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700"
                        placeholder="Enter your email"
                        {...register('email', { pattern: /^\S+@\S+$/i })}
                    />

                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700"
                        placeholder="Enter your message"
                        rows="4"
                        {...register('message')}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded font-semibold"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactInfo;
