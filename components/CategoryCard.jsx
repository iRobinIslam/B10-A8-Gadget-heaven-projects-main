import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";


const CategoryCard = () => {
    const {category}= useParams();
    const categoryData = useLoaderData();
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        if(category){
            const filterItem = [...categoryData].filter(item => item.category === category);
            setCategories(filterItem)
        }
        else{

            setCategories(categoryData)
        }
    },[categoryData , category])

    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-5 '>
           {
            categories.length>0 ? categories.map((categori , index) => <Card key={index} categori={categori}></Card>) : <h3 className='text-2xl text-purple-900 font-bold'>No Data Found</h3>
            
           }
        </div>
    );
};

export default CategoryCard;