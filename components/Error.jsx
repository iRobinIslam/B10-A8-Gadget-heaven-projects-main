import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className='flex space-y-5 justify-center items-center flex-col my-20'>
            <h3 className='text-3xl font-bold '> 404 Page</h3>
            <h3 className='text-3xl font-bold '>No Data Found !!</h3>
            <Link to='/'><button className='bg-orange-400 btn'>Back Home</button></Link>
        </div>
    );
};

export default Error;