import Lottie from 'lottie-react';
import Web_Sell from '../../../../Web_site_sell.json'


const Banner = () => {
    return (
        <>
        <div className='flex justify-center items-center w-[90%] mx-auto'>
        <div className="">
            <h1 className='text-5xl my-10'>We manage your IT, so you can manage your business.</h1>
            <h2 className='text-3xl'>Take charge of your business continuity with innovative IT solutions</h2>
            <div className="my-10">
                <button className='btn mr-5 bg-blue-800 text-white'>Schedule a Free Consultation</button>
                <button className='btn text-blue-800'>Services</button>
            </div>
            </div>
           <div className="">
               <Lottie animationData={Web_Sell}></Lottie>
           </div>
        </div>
        <hr className='border-2 mb-5'/>
        </>
    );
};

export default Banner;