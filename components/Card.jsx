import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ categori }) => {
    const { price, product_image, product_title, product_id } = categori || {}
    return (
        <div className="card bg-base-100 border transition hover:scale-105 shadow-xl rounded-xl overflow-hidden">
            <figure className="px-2 pt-5">
                <img
                    src={product_image}
                    alt="Shoes"
                    className="rounded-xl h-24" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{product_title}</h2>
                <p className='text-gray-600 font-bold'> Price : {price} $</p>
                <div className="card-actions">
                    <NavLink to={`/productDetails/${product_id}`}> <button className="btn btn-outline rounded-full text-purple-700 hover:text-white hover:bg-green-400">Details</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Card;