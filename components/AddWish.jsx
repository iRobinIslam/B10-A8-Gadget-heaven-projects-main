import React, { useEffect, useState } from "react";
import { getwshToLocalStorage, removeWishLocalStorage, setDataToLocalStorage } from "../src/utilities/Utilities";
import WishCard from "./WishCard";

const AddWish = () => {
    const [addWish, setAddWish] = useState([])
    useEffect(() => {
        const products = getwshToLocalStorage()
        setAddWish(products)
    }, [])

    const handelRemove = id => {
        const RemainingItem = addWish.filter(device => device.product_id != id);
        removeWishLocalStorage(id)
        setAddWish(RemainingItem)

    }

    return (
        <div>
            <h3 className='text-xl font-bold text-black'>Wishlist</h3>

            <div className=' my-5 space-y-5'>
                {
                    addWish.map(item => <WishCard 
                       
                        handelRemove={handelRemove}  key={item.product_id} product={item}></WishCard>)
                }
            </div>
        </div>
    );
};

export default AddWish;

