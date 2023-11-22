import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Item = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/item`)
            .then((res) => res.json())
            .then((data) => {
                setAllProducts(data);
                setVisibleProducts(data.slice(0, 6));
            });
    }, []);

    const handleShowAll = () => {
        setShowAll(true);
        setVisibleProducts(allProducts);
    };

    return (
        <div className="bg-blue-100 py-10">
            <div className="w-[90%] mx-auto">
                <div className="">
                    <h1 className="bg-slate-400 text-white w-[130px] py-4 btn-disabled pl-2 rounded">HOW WE DO</h1>
                    <p className="my-10 font-bold text-4xl">Solutions</p>
                </div>
                <div className="grid grid-cols-3 h-full gap-10 ">
                    {visibleProducts.map((product) => (
                        <div key={product._id} className="border w-[350px] p-5 bg-white rounded shadow-lg">
                            <img className="w-[70px] " src={product.img} alt="" />
                            <h1 className="my-5 font-bold">{product.name}</h1>
                            <p>{product.dissertation}</p>
                            <hr className="my-5" />
                            <Link to={`/oneItem/${product._id}`} className="flex items-center gap-2">Learn more <FaArrowRight /></Link>
                        </div>
                    ))}
                </div>
               <div className="w-[10%] mx-auto">
               {!showAll && (
                    <button onClick={handleShowAll} className="bg-slate-500 text-white py-2 px-4 mt-4 rounded ">
                        Show All
                    </button>
                )}
               </div>
            </div>
        </div>
    );
};

export default Item;


















// import { useEffect, useState } from "react";
// import { FaArrowRight } from "react-icons/fa6";
// import { Link } from "react-router-dom";


// const Item = () => {
//     const [products,setProducts] = useState([])
//     useEffect(()=>{
//         fetch(`http://localhost:5000/item`)
//         .then(res => res.json())
//         .then(data => setProducts(data))
//     },[])
//     return (
//         <div className="bg-blue-100 py-10">
//             <div className="w-[90%] mx-auto">
//                 <div className="">
//                     <h1 className="bg-slate-400 text-white w-[130px] py-4 btn-disabled pl-2 rounded">HOW WE DO</h1>
//                     <p className="my-10 font-bold text-4xl">Solutions</p>
//                 </div>
//                 <div className="grid grid-cols-3 h-full gap-10 ">
//                     {
//                         products.map(product => 
//                             <>
//                                 <div key={product._id} className="border w-[350px] p-5 bg-white rounded shadow-lg">
//                                     <img className="w-[70px] " src={product.img} alt="" />
//                                     <h1 className="my-5 font-bold">{product.name}</h1>
//                                     <p>{product.dissertation}</p>
//                                     <hr className="my-5"/>
//                                     <Link className="flex items-center gap-2">By Now <FaArrowRight /></Link>
//                                 </div>
//                             </>
//                             )
//                     }
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Item;