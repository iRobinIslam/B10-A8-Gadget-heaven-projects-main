import React, { useEffect, useState} from "react";
import { NavLink, useLocation } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { CiHeart } from "react-icons/ci";
import { getDataToLocalStorage, getwshToLocalStorage } from "../src/utilities/Utilities";

const Navbar = () => {

    const { pathname } = useLocation();
    const [addCard , setAddCard] = useState([]);
    const [wishlist , setWishList] = useState([])
    useEffect(()=>{
        const items = getDataToLocalStorage()
        const products = getwshToLocalStorage()
        setWishList(products)
        setAddCard(items)
    },[])

    return (
        <div className={`navbar rounded-t-xl fixed top-0 z-50 px-12  ${pathname === '/' ? "bg-purple-600" : "bg-white"}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <NavLink to='/' >Home</NavLink>
                        <NavLink to='/statistics'>Statistics</NavLink>
                        <NavLink to='/dashboard/cart'>Dashboard</NavLink>

                    </ul>
                </div>
                <NavLink to='/' className='font-bold md:text-3xl text-xl text-black'>Gadget Heaven</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu gap-5 menu-horizontal px-1">
                    <NavLink to='/' className={({isActive}) => isActive ? 'text-base font-normal px-4 py-3 bg-black rounded-xl text-white' :'px-4 py-3  rounded-xl text-base font-normal'}>Home</NavLink>
                    <NavLink to='/statistics' className={({isActive}) => isActive ? 'text-base font-normal px-4 py-3 bg-black rounded-xl text-white' :'px-4 py-3  rounded-xl text-base font-normal'}>Statistics</NavLink>
                    <NavLink to='/dashboard' className={({isActive}) => isActive ? 'text-base font-normal px-4 py-3 bg-black rounded-xl text-white' :'px-4 py-3  rounded-xl text-base font-normal'}>Dashboard</NavLink>
                    <NavLink to='/contact' className={({isActive}) => isActive ? 'text-base font-normal px-4 py-3 bg-black rounded-xl text-white' :'px-4 py-3  rounded-xl text-base font-normal'}>Contact</NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <div className='flex items-center gap-5'>
                    <div className='bg-white p-2 border rounded-full relative'><TiShoppingCart size={24} />
                    <div className='absolute -top-4 -right-1 bg-gray-400 px-2 text-white rounded-full'>{addCard.length}</div>
                    </div>
                    <div className='bg-white border relative p-2 rounded-full'><CiHeart size={24} />
                    <div className='absolute -top-4 -right-1 bg-gray-400 px-2 text-white rounded-full'>{wishlist.length}</div></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;