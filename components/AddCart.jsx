import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getDataToLocalStorage, removeToLocalStorage } from "../src/utilities/Utilities";
import AddCardDetail from "./AddCardDetail";
import { toast } from "react-toastify";
import { GiSettingsKnobs } from "react-icons/gi";

const AddCart = () => {
    const [addCard, setAddCard] = useState([]);

    const navigate = useNavigate()
    useEffect(() => {
        const items = getDataToLocalStorage()
        setAddCard(items)

    }, []);
    const handelshort = () => {
        const sortprize = [...addCard].sort((a, b) => b.price - a.price);
        setAddCard(sortprize)
    }

    const handeldelete = id => {
        const RemainingItem = addCard.filter(device => device.product_id != id);
        removeToLocalStorage(id)
        setAddCard(RemainingItem)

    }
    const handelPurchase = () => {

        if (localStorage.length < 1) {
            return toast.error('Please Add Data and then purshase')
        } else {

            document.getElementById('my_modal_1').showModal();
            setTimeout(() => {
                localStorage.clear('cart');
                setAddCard([])
                navigate('/')
            }, 2000)


        }




    }

    return (
        <div className='my-12'>
            <div className='flex justify-between items-center'>
                <h3 className='font-bold text-xl'>Cart</h3>
                <div className='flex items-center gap-10'>
                    <h3 className='font-bold text-xl'>Total Cost : {addCard.reduce((pre, sum) => {
                        return pre + sum.price
                    }, (0))} </h3>
                    <NavLink to='/dashboard' className=" border flex items-center gap-2 rounded-full px-4 py-2 border-purple-600 font-medium hover:bg-slate-500 hover:text-white" onClick={handelshort}>Short by Price <GiSettingsKnobs size={20} color='purple-500' /></NavLink>
                    <NavLink onClick={handelPurchase} className=" border bg-purple-500 rounded-full px-4 py-2 hover:text-white hover:bg-purple-900 border-purple-600"  > Purchase </NavLink>
                </div>
            </div>

            <div className=' my-5 space-y-5'>
                {
                    addCard.map(item => <AddCardDetail handeldelete={handeldelete} key={item.product_id} product={item}></AddCardDetail>)
                }
            </div>
            <div>
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg flex items-center justify-center"><img src="https://img.icons8.com/?size=64&id=118993&format=png" alt="" /></h3>
                        <h3 className='text-xl font-bold text-black text-center mb-5 '>Payment SuccessFull</h3>
                        <hr />
                        <p className='text-gray-500 mt-2 text-center'>Thanks for Purchasing</p>
                        <h3 className=' text-xl text-gray-500 text-center'>Total Cost : {addCard.reduce((pre, sum) => {
                            return pre + sum.price
                        }, (0))} </h3>
                        <div className="modal-action">  
                                <button className="btn w-full">Close</button>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default AddCart;







