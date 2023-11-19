import Rating from 'react-rating';
import './Reviewed.css'
import { FaRegStar, FaStar } from "react-icons/fa6";

const Reviewed = () => {
    return (
        <div className="grid grid-cols-5 w-[90%] mx-auto dk">
            <div className="">
                <div className="">
                    <h2>REVIEWED ON <span>
                    <Rating
                        placeholderRating={4.5}
                        readonly
                        emptySymbol={<FaRegStar />}
                        placeholderSymbol={<FaStar className='text-warning' />}
                        fullSymbol={<FaStar />}
                        />
                        </span></h2>
                </div>
                <div className=""> 
                  <h2><span className='text-[22px]'>Clutch</span> 31 REVIEWS</h2>  
                </div>
            </div>
            <div className="border-l-4">
                <h1>20Years</h1>
                <h2>Proven Track Record</h2>
            </div>
            <div className="border-l-4">
                <h1>98%</h1>
                <h2>Customer Satisfaction</h2>
            </div>
            <div className="border-l-4">
                <h1>1,500 Projects</h1>
                <h2>We Have Completed</h2>
            </div>
            <div className="border-dotted border-l-4 ">
                <h1>3 Mins</h1>
                <h2>Average Answer Time</h2>
            </div>
        </div>
    );
};

export default Reviewed;