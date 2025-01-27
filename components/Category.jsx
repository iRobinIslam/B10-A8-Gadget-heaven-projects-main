import React from "react";
import CategoryBtn from "./CategoryBtn";
import { useLoaderData, Outlet, NavLink } from "react-router-dom";

const Category = () => {
    const CategoryBtnData = useLoaderData()
    return (

        <div className='flex justify-between gap-5 py-10 my-5'>
            <div className='w-1/4 bg-white shadow-lg text-center border max-h-min rounded-xl p-4 space-y-5'>
            <NavLink to='/' className={({isActive}) => isActive ? 'bg-gray-500 inline-block w-full py-3 rounded-xl' :'border inline-block w-full py-3 rounded-xl my-2'}> All Products</NavLink>
                {
                    CategoryBtnData.map(names => <CategoryBtn key={names.product_id} category={names}></CategoryBtn>)
                }
            
            </div>
            <div className='w-3/4'>
                <Outlet></Outlet>

            </div>
        </div>

    );
};

export default Category;