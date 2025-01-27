import React from "react";
import Heading from "../components/Heading";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

const ProductsDetails = () => {
    return (
        <div>
            <Helmet>
            <title>Products Details</title>
            <meta name="description" content="here is Products Details" />
            </Helmet>
            <Heading
            title={'Product Details'}
            subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}
            ></Heading>
            <Outlet></Outlet>
        </div>
    );
};

export default ProductsDetails;