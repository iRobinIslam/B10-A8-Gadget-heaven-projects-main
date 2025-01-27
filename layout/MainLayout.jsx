import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";


const MainLayout = () => {
    return (
        <div>
            <Helmet>
                <title>Gadget Heaven Projects</title>
                <meta name="description" content="Gadget heaven products" />
            </Helmet>
            <div className='h-16'>
                <Navbar></Navbar>
            </div>
            <div className='min-h-[calc(100vh-232px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;