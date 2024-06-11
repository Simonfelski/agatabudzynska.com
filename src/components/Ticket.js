import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Ticket = () => {
    const form = useRef();
    const [alertMessage, setAlertMessage] = useState('');

    function sendEmail(event) {
        event.preventDefault();

        const formData = new FormData(form.current);
        let isFormValid = true;

        for (let [name, value] of formData.entries()) {
            if (!value) {
                isFormValid = false;
                break;
            }
        }

        if (!isFormValid) {
            setAlertMessage('Wypełnij wszystkie pola');
            setTimeout(() => {
                setAlertMessage('');
            }, 3000);
            return;
        }
        // Add your form submission logic here
        emailjs
            .sendForm('service_g0vfyqx', 'template_gi2s1rp', form.current, {
                publicKey: '9WPgRDgorbMeCNWvY',
            })
            .then(
                () => {
                    setAlertMessage('Wiadomość wysłana pomyślnie');
                    form.current.reset();
                    setTimeout(() => {
                        setAlertMessage('');
                    }, 3000); // Hide the alert after 3 seconds
                },
                error => {
                    setAlertMessage('Wypełnij wszystkie pola');
                    console.log('FAILED...', error.text);
                    setTimeout(() => {
                        setAlertMessage('');
                    }, 3000); // Hide the alert after 3 seconds
                }
            );
    }

    return (
        <div className="max-w-md lg:max-w-[1366px] mx-auto py-5 px-10">
            <form ref={form} onSubmit={sendEmail} className="bg-white rounded px-8 pt-6 pb-8 mb-4">
                {/* Alert message */}
                {alertMessage && (
                    <div className="mb-4 p-2 bg-yellow-200 text-yellow-800 rounded">{alertMessage}</div>
                )}
                <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full md:w-1/3 px-3 mb-4">
                        <input
                            className="border-buttonTwo appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="Imię"
                            name="from_name"
                        />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-4">
                        <input
                            className="border-buttonTwo appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="E-mail"
                            name="from_email"
                        />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-4">
                        <input
                            className="border-buttonTwo appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="Numer telefonu"
                            name="from_number"
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <textarea
                        className="border-buttonTwo appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Wiadomość"
                        name="message"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="rounded-lg text-sm text-[black] border-2 border-buttonTwo font-semibold bg-button hover:bg-button-hover py-2 px-4 transition duration-300"
                        type="submit">
                        Wyślij
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Ticket;
