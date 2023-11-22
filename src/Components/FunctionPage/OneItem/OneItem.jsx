import { useLoaderData } from "react-router-dom";
import Contact from "../../Contact/Contact";

const OneItem = () => {
    const product = useLoaderData();
    const {name,img2,dissertation,price} = product
        const backgroundImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf3MSPAIURn3tWgTetKR9lAVLH61b4A8-b7WWBF6rRVJUzF2ol"
        console.log(product)
    return (
       <>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">This modal works with a hidden checkbox!</p>
                <div className="modal-action">
                <label htmlFor="my_modal_6" className="btn">Close!</label>
                </div>
            </div>
            </div>
        <div>
             <div style={{ background: `url(${backgroundImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                    <div className="text-white py-10 w-[90%] mx-auto">
                    <h1 className="bg-blue-400 text-white w-[130px] py-1 btn-disabled pl-2 rounded">SOLUTIONS</h1>
                        <h1 className="text-5xl my-10">{name}</h1>
                        <p className="text-3xl">Why hire an internal IT person, when you can have an <br /> entire team of IT experts for a fraction of the cost?</p>
                        <button className="btn my-10 text-blue-600">Schedule a Free Consultation</button>
                    </div>
             
            </div> 
            <div className="flex w-[90%] mx-auto items-center my-20 border-4 p-5">
                <div >
                    <h1 className="text-3xl">{name}</h1>
                    <p className="text-[18px] my-7">{dissertation}</p>
                    <p><span className="font-bold">Price:</span> {price}$</p>
                    <label htmlFor="my_modal_6" className="btn my-4">Booking Now</label>
                </div>
                <div className="">
                    <img className="w-[900px]" src={img2} alt="" />
                </div>
            </div>
            <div className="">
            
            </div>
        </div>
        <div className="">
            <Contact></Contact>
        </div>
       </>
    );
};

export default OneItem;