import Banner from "../components/Banner";
import Heading from "../components/Heading";
import Title from "../components/Title";
import { Outlet } from "react-router-dom";


const Home = () => {


    return (
        <div >
            <Heading
            subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}
             title={'Upgrade Your Tech Accessorize with  Gadget Heaven Accessories'}></Heading>
            <div className='w-11/12 mx-auto'>
                <Banner></Banner>
                <Title></Title>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;