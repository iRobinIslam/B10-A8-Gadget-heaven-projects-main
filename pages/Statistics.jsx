import React from "react";
import Heading from "../components/Heading";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

const Statistics = () => {
    return (
        <div>
            <Helmet>
            <title>Statistics </title>
            <meta name="description" content="Statistics section" />
            </Helmet>
            <Heading
            title={'Statistics'}
            subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}
            ></Heading>
            <div className='w-11/12 mx-auto'>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Statistics;