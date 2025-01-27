import React from "react";
import { NavLink } from "react-router-dom";

const CategoryBtn = ({category}) => {
    
    return (
        <div className=' max-h-min text-center my-2'>
            
            <NavLink className={({isActive}) => isActive ? 'bg-gray-600 border py-3  rounded-xl  w-full inline-block' : ' border rounded-xl  w-full py-3 inline-block'} to={`/ /${category.category}`}>{category.category}</NavLink>
            
        </div>
    );
};

export default CategoryBtn;