import { useEffect, useState } from "react";


const Do = () => {
    const [workData,setWorkData] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/parson')
        .then(res => res.json())
        .then(data => setWorkData(data))

    },[])
    return (
        <>
            <div className="">
                <div className="">
                    <p>HOW WE DO</p>
                    <h1>Solving IT challenges in every industry, every day.</h1>
                </div>
               <div className="grid grid-cols-3">
                    {
                            workData.map(work => 
                            <>
                            <div id={work.id} className="flex">
                                <img src={work.img} alt="" />
                                <h1>{work.name}</h1>
                            </div>
                            </>
                            )
                        }
               </div>
               
            </div>
        </>
    );
};

export default Do;