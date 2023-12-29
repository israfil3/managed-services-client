import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaArrowRight, FaDeleteLeft } from "react-icons/fa6";
import Swal from "sweetalert2";


const ManageService = () => {
    const [item,setItem] = useState([]);
    const [oneItem, setOneItem] = useState([])


    const updateData = (id)=> {
        fetch(`http://localhost:5000/item/${id}`)
        .then(res => res.json())
        .then(data => setOneItem(data))
    } 

        axios.get(`http://localhost:5000/item`)
        .then(res => {
            setItem(res.data)
    })
    const { register, formState: { errors }, handleSubmit, reset} = useForm();
    
    const onSubmit = (formData) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, submit it!",
        }).then((result) => {
            if (result.isConfirmed){
                const contactPerson = {
                    name: formData.serviceName,
                    img: formData.serviceImg,
                    note: formData.note,
                    price: formData.price,
                    img2: formData.bannerImages,
                    dissertation: formData.dissertation,
              };
                axios.patch(`http://localhost:5000/item/${oneItem?._id}`,contactPerson)
                .then((res) => {
                    Swal.fire({
                        title: "Updated!",
                        text: "Your data has been Updated.",
                        icon: "success",
                    });
                     reset();
                    console.log(res.data);
                })
                .catch((error) => {
                    console.error("Error submitting data:", error);
                    Swal.fire({
                        title: "Error",
                        text: "An error occurred while submitting data.",
                        icon: "error",
                    });
                });
        }})
    }

    const deleteMethod = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, submit it!",
        })
        .then((result) => {
            if (result.isConfirmed){
                axios.delete(`http://localhost:5000/item/${id}`)
                .then((res) => {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your data has been Deleted.",
                        icon: "success",
                    });
                     reset();
                    console.log(res.data);
                })
                .catch((error) => {
                    console.error("Error submitting data:", error);
                    Swal.fire({
                        title: "Error",
                        text: "An error occurred while submitting data.",
                        icon: "error",
                    });
                });
            }})
    }

    return (
        <>
            <div className="">
                <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                <div className="modal" role="dialog">
                <div className="modal-box">
                <div className="">
                    <div className="flex justify-between">
                        <h1>Name: {oneItem.name}</h1>
                        <h2>Id: {oneItem._id}</h2>
                    </div>
                    <div key={oneItem._id} className="as">
                            <form onSubmit={handleSubmit(onSubmit)} >
                            <div className="flex gap-10 items-center justify-center">
                            <div className="">
                                    <div className="mt-5 w-[100%]">
                                    <p className="mr-2">Service Name</p>
                                    <input  type="text" className="w-full text-black placeholder-black  rounded py-2"  {...register("serviceName", {  })}  />
                                </div>
                                <div className="mt-5">
                                    <p className="mr-2">Service img</p>
                                    <input type="img" className="w-full text-black placeholder-black  rounded py-2"  {...register("serviceImg", { })}  />
                                </div>
                                <div className="mt-5">
                                    <p className="mr-2">note (only for admin)</p>
                                    <input type="text" className="w-full text-black placeholder-black  rounded py-2"  {...register("note", {  })}  />
                                </div>
                            </div>
                            <div className="">
                                <div className="mt-5">
                                    <p className="mr-2">price</p>
                                    <input  defaultValue={oneItem.price} type="number" className="w-full text-black placeholder-black  rounded py-2"  {...register("price", { })}  />
                                </div>
                                <div className="mt-5">
                                    <p className="mr-2">Banner Images</p>
                                    <input type="text" className="w-full text-black placeholder-black  rounded py-2"  {...register("bannerImages", { })}  />
                                </div>
                                <div className="mt-5">
                                    <p className="mr-2">Dissertation</p>
                                    <input type="text" className="w-full text-black placeholder-black  rounded py-2"  {...register("dissertation", { })}  />
                                </div>
                            </div>
                            </div>
                            {errors.exampleRequired && <span>This field is required</span>}
                            <div className=" w-[70%] mx-auto text-center">
                                <input className="btn my-5 " type="submit" value="Submit" />
                            </div>
                            </form> 
                            
                    </div>      
                    <hr />
                    <div className="flex justify-end my-5">
                        <label htmlFor="my_modal_6" className="btn mx-auto">Close!</label>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 gap-10">
                {
                  item.map(items => 
                         <div key={items._id} className="border w-[350px] p-5 bg-white rounded shadow-lg">
                            <img className="w-[70px] " src={items.img} alt="" />
                            <h1 className="my-5 font-bold">{items.name}</h1>
                            <p>{items.dissertation}</p>
                            <hr className="my-5" />
                            <div className="flex justify-between">
                            <label htmlFor="my_modal_6" onClick={()=>updateData(items._id)} className="flex items-center gap-2">Update <FaArrowRight /></label>
                            <label className="flex items-center gap-2" onClick={()=>deleteMethod(items._id)}>Delete <FaDeleteLeft/></label>
                            </div>
                        </div>
                  )
                }
            </div>
            <div>
        </div>
        </>
      
    );
};

export default ManageService;