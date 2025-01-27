import React from "react";
import Heading from "../components/Heading";
import { Helmet } from "react-helmet";

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Contact Us</title>
                <meta name="description" content="Contact us for your best Suppor" />
            </Helmet>
            <Heading
                subtitle={'take great pride in providing one of the best customer service experience to our clients. We are ever ready to answer your queries and provide solutions to your problems. So, don’t hesitate to reach out to us by filling up the form below. We will get back to you as soon as possible'}
                title={'Contact Us'}></Heading>

            <div className='my-5 w-11/12 mx-auto'>
                <h3 className='text-xl font-bold'>You can also contact us easily by calling our HOTLINE: 16794 or 09610001010</h3>
                <div className='space-y-10 my-5 py-5 w-8/12 mx-auto'>
                    <label className="input input-bordered  flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Search" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </label>
                    <label className="input input-bordered flex  items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="text" className="grow" placeholder="Email" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                        </svg>
                        <input type="text" className="grow" placeholder="Username" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd" />
                        </svg>
                        <input type="password" placeholder='password' className="grow" />
                    </label>
                    <textarea
                        placeholder="Your Massage"
                        className="textarea textarea-bordered textarea-lg h-72 w-full"></textarea>
                    <input type="button" className='bg-green-500 px-5 py-3 rounded-xl font-semibold hover:bg-purple-600 hover:text-white' value="Submit" />
                </div>
            </div>
            <div className='w-11/12 mx-auto'>
                <iframe className='w-full h-[500px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29219.41533178402!2d90.36464899908518!3d23.73215092241562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8c5e90327f3%3A0xd8c2f64920621978!2sNilkhet%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1730904686756!5m2!1sen!2sbd" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default Contact;