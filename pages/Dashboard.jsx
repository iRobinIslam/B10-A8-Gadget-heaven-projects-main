import React from "react";
import Heading from "../components/Heading";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const Dashboard = () => {
    const {pathname} = useLocation();
    return (
        <div>
            <Helmet>
            <title>Dashboard</title>
            <meta name="description" content="Here is Your Dashboard Section" />
            </Helmet>
            <Heading
                title={'Dashboard'}
                subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}
            ></Heading>
            <div className='-top-40 relative'>   
                <div className='flex text-center w-3/12 gap-4 mx-auto'>
                    <Link to='/dashboard' className={pathname === '/dashboard' ? 'bg-gray-600 border py-3  rounded-xl  w-full inline-block' : ' border rounded-xl  w-full py-3 inline-block' } >cart</Link>
                    <Link to='/dashboard/wish' className={pathname === '/dashboard/wish' ? 'bg-gray-600 border py-3  rounded-xl  w-full inline-block' : ' border rounded-xl  w-full py-3 inline-block' } >WishList</Link>
                </div>
               {
            }
            
            </div>
            <div className='w-11/12 mx-auto'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
