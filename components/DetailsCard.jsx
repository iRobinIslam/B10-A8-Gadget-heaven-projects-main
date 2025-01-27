import React, { useEffect, useState} from "react";
import { CiHeart } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";
import { useLoaderData, useParams } from "react-router-dom";
import { setDataToLocalStorage, setwishToLocalStorage } from "../src/utilities/Utilities";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const DetailsCard = () => {
    const { Id } = useParams();
    const detailsData = useLoaderData();
    const [productdetails, setProductdetails] = useState([]);
    const [isDisabled , setIsDisabled] = useState(false)

    const handeladdtoCard = details => {
        setDataToLocalStorage(details)

    }


    const handelWishlist = wish => {
        setwishToLocalStorage(wish)
        setIsDisabled(true)

    }

    useEffect(() => {
        const findItems = detailsData.find(details => details.product_id === parseInt(Id));
        setProductdetails(findItems)
    }, [])
    const { product_image, product_title, price, availability, description, specifications, rating } = productdetails

    return (
        <div className=' -top-40 w-9/12 mx-auto  relative'>
            <div className='border-2 items-center min-h-[200px] bg-white rounded-xl border-white p-4'>
                <div className='flex  gap-10 '>
                    <div className=' w-8/12 bg-gray-500 p-4 rounded-xl flex flex-col justify-center items-center'>
                        <img className='rounded-xl w-full ' src={product_image} alt="" />
                    </div>
                    <div className='text-gray-600 w-full'>
                        <h3 className='text-xl text-black font-bold'>{product_title}</h3>
                        <h4 className='font-bold my-3'> Price : $ {price}</h4>
                        <span className='text-green-600 border px-2 py-2 rounded-full border-green-600 bg-slate-100'>{availability ? 'In Stock' : 'Out of Stock'}</span>
                        <p className='my-3'>{description}</p>
                        <ul className='text-black'>specifications</ul>
                        {
                            specifications && specifications.map((items, idx) => <li key={idx}>{items}</li>)
                        }
                        <h5 className='text-black flex  items-center  gap-1 font-semibold'>Rating <div className='h-4 w-4 bg-black'></div></h5>
                        <div className='flex gap-5 items-center'>
                            <div>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={rating}
                                    readOnly
                                />
                            </div>
                            <p className='font-bold bg-gray-200 rounded-full px-2 py-1'>{rating}</p>
                        </div>
                        <div className='my-3 flex items-center'>
                            <button onClick={() => handeladdtoCard(productdetails)} className='bg-purple-600 hover:bg-white hover:text-purple-600 px-2 py-1 flex gap-1 border rounded-xl mr-4 text-white  font-normal'>Add to Card <TiShoppingCart size={24} /></button>
                            <button onClick={() => handelWishlist(productdetails)} disabled={isDisabled} className={`border rounded-full px-2 py-2  ${!isDisabled && 'hover:bg-purple-600 hover:text-white'} first-of-type`}> <CiHeart size={24} className={`${isDisabled && 'cursor-not-allowed'}`} /></button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;
