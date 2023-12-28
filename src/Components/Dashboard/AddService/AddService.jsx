import { useForm } from "react-hook-form";
import addService from '../../../../addSerivce.json' 
import Lottie from "lottie-react";
import './AddService.css'
import Swal from "sweetalert2";
import axios from "axios";

const AddService = () => {
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
                const serviceData = {
                    name: formData.serviceName,
                    img: formData.serviceImg,
                    note: formData.note,
                    price: formData.price,
                    img2: formData.bannerImages,
                    dissertation: formData.dissertation,
                };
                axios.put(`http://localhost:5000/item`,serviceData)
                .then((res) => {
                    Swal.fire({
                        title: "Submitted!",
                        text: "Your data has been submitted.",
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
            }
        })
    };

    return (
        <>
      <div className="border shadow-lg">
         <h1 className="text-4xl text-center mt-10  font-bold">Add Service</h1>
         <hr  className="border-2 border-black w-[20%] mx-auto"/>
         <hr  className="border-2 border-black w-[15%] mx-auto mt-2"/>
       <div className="p-10 flex items-center justify-center ">
        <div className="">
            <Lottie animationData={addService}></Lottie>
        </div>
        <div className=" as">
         <form onSubmit={handleSubmit(onSubmit)} >
            <div className="flex gap-10 items-center justify-center">
            <div className="">
                    <div className="mt-5 w-[100%]">
                    <p className="mr-2">Service Name</p>
                    <input  type="text" className="w-full text-black placeholder-black  rounded py-2"  {...register("serviceName", { required: true })}  />
                </div>
                <div className="mt-5">
                    <p className="mr-2">Service img</p>
                    <input type="img" className="w-full text-black placeholder-black  rounded py-2"  {...register("serviceImg", { required: true })}  />
                </div>
                <div className="mt-5">
                    <p className="mr-2">note (only for admin)</p>
                    <input type="text" className="w-full text-black placeholder-black  rounded py-2"  {...register("note", { required: true })}  />
                </div>
            </div>
            <div className="">
                <div className="mt-5">
                    <p className="mr-2">price</p>
                    <input  type="number" className="w-full text-black placeholder-black  rounded py-2"  {...register("price", { required: true })}  />
                </div>
                <div className="mt-5">
                    <p className="mr-2">Banner Images</p>
                    <input type="text" className="w-full text-black placeholder-black  rounded py-2"  {...register("bannerImages", { required: true })}  />
                </div>
                <div className="mt-5">
                    <p className="mr-2">Dissertation</p>
                    <input type="text" className="w-full text-black placeholder-black  rounded py-2"  {...register("dissertation", { required: true })}  />
                </div>
            </div>
            </div>
          {errors.exampleRequired && <span>This field is required</span>}
          <input className="btn my-5" type="submit" value="Submit" />
         </form>
         </div>
        </div>
    </div>
         </>
    );
};

export default AddService;