import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Heading = ({ title, subtitle }) => {
    const { pathname } = useLocation();
    return (
        <div>

            {
                pathname === '/' ? <div className='bg-purple-600 pt-20 pb-60 rounded-b-xl' >
                    <div className='container mx-auto px-12 items-center justify-center flex flex-col space-y-7'>
                        <h2 className='font-bold md:text-5xl md:w-10/12 text-xl text-center text-white leading-10'>{title}</h2>
                        <p className='text-center md:w-9/12 text-white'>{subtitle}</p>
                        <div>
                            <NavLink to='/dashboard'> <button className=' py-3 hover:bg-purple-950 bg-white rounded-full text-purple-600 px-6'>Shop Now</button> </NavLink>
                        </div>
                    </div>
                </div> : pathname === '/statistics' ? <div className='bg-purple-600 py-20 rounded-b-xl' >
                    <div className='container mx-auto px-12 items-center justify-center flex flex-col space-y-7'>
                        <h2 className='font-bold md:text-5xl md:w-10/12 text-xl text-center text-white leading-10'>{title}</h2>
                        <p className='text-center md:w-9/12 text-white'>{subtitle}</p>


                    </div>
                </div> :pathname === '/contact' ? <div className='bg-purple-600 py-20 rounded-b-xl' >
                    <div className='container mx-auto px-12 items-center justify-center flex flex-col space-y-7'>
                        <h2 className='font-bold md:text-5xl md:w-10/12 text-xl text-center text-white leading-10'>{title}</h2>
                        <p className='text-center md:w-9/12 text-white'>{subtitle}</p>


                    </div>
                </div>: <div className='bg-purple-600 pt-20 pb-60 rounded-b-xl' >
                    <div className='container mx-auto px-12 items-center justify-center flex flex-col space-y-7'>
                        <h2 className='font-bold md:text-5xl md:w-10/12 text-xl text-center text-white leading-10'>{title}</h2>
                        <p className='text-center md:w-9/12 text-white'>{subtitle}</p>
                    </div>
                </div>
            }
        </div>


    );
};

export default Heading;



