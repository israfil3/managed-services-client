import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";



const Company = () => {
    
const [company,setCompany] = useState([]);
  useEffect(()=>{
    fetch(`http://localhost:5000/company`)
    .then(res => res.json())
    .then(data => setCompany(data))
  },[])
  console.log(company)
    return (
        <div className="w-[90%] mx-auto">
            <div className="my-10">
                <p className="bg-slate-200 w-[130px] py-4 px-2 rounded">WHERE WE DO</p>
                <h1 className="text-5xl my-10 font-bold">Success Stories</h1>
            </div>
            <div className="grid grid-cols-3 gap-10 ">
                {
                    company.map(com =>
                        <>
                            <div id={com._id}>         
                              <div className="card w-96 h-[100%] bg-base-100 shadow-xl border">
                                <figure className="px-10 pt-10">
                                <img src={com.img} alt="" />
                                </figure>
                                <div className="card-body">
                                        <h1 className="text-[13px] hover:text-blue-600">{com.name}</h1>
                                        <h2 className="text-[20px] font-bold hover:text-blue-600 my-5">{com.highalite}</h2>
                                        <h3>{com.discopration}</h3>
                                       <div className="">
                                            <h4 className="flex items-center"><span className="bg-blue-400 p-2 rounded-full mr-4"><FaCheck></FaCheck></span>{com.title1}</h4>
                                           <h4 className="flex items-center"><span className="bg-blue-400 p-2 rounded-full mr-4 my-5"><FaCheck></FaCheck></span> {com.title2}</h4>
                                       </div>
                                    <div className="card-actions">
                                    <button >Learn more</button>
                                    </div>
                                </div>
                                </div>
                             </div>
                        </>

                        )
                }
            </div>
        </div>
    );
};

export default Company;
