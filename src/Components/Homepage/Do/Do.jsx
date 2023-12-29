import { useEffect, useState } from "react";
import './Do.css'
import { Link } from "react-router-dom";


const Do = () => {
    const [workData,setWorkData] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/parson')
        .then(res => res.json())
        .then(data => setWorkData(data))

    },[])
    return (
        <>
            <div className=" w-[90%] mx-auto">
                <div className="">
                    <p className="bg-slate-200 w-[130px] py-4 btn-disabled pl-2 rounded">HOW WE DO</p>
                    <h1 className="text-5xl font-bold my-10">Solving IT challenges in every <br /> industry, every day.</h1>
                </div>
               <div className="grid lg:grid-cols-3 gap-10 ">
                    {
                            workData.map(work => 
                            <>
                           <Link>
                               <div id={work._id} className="flex items-center bg-slate-200 gap-5 rounded-3xl do">
                                    <img src={work.img} alt="" />
                                    <h1 className="font-bold">{work.name}</h1>
                                </div>
                           </Link>
                            </>
                            )
                        }
               </div>
               
            </div>
        </>
    );
};

export default Do;