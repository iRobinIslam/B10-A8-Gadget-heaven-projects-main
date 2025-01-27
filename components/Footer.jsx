import React from 'react';

const Footer = () => {
    return (
        <div className='bg-neutral'>
           <div className='w-11/12 mx-auto pt-5 mt-5'>
           <div className='border-b py-5'>
                <h3 className='text-3xl font-bold text-white text-center'>Gadget Heaven</h3>
                <p className='w-8/12 mx-auto text-center text-white py-4'>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <footer className="footer  text-neutral-content p-10">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover"> Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
           </div>
        </div>
    );
};

export default Footer;