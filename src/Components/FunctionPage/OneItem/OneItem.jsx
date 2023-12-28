import { useLoaderData } from "react-router-dom";
import Contact from "../../Contact/Contact";
import { useForm } from "react-hook-form";
import './oneItem.css'
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const OneItem = () => {
    const product = useLoaderData();
    const {user} = useContext(AuthContext)
    const {name,img2,dissertation,price} = product
        const backgroundImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf3MSPAIURn3tWgTetKR9lAVLH61b4A8-b7WWBF6rRVJUzF2ol"
        console.log(product);


        const { register, handleSubmit, watch, formState: { errors } } = useForm();
        const onSubmit = data => {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, submit it!",
            }).then((result) => {
                if (result.isConfirmed) {
                    const contactPerson = {
                        firstName: data.firstName,
                        companyName: data.company,
                        lastName: data.lastName,
                        companyEmail: data.email,
                        phone: parseInt(data.number),
                        services: data.section,
                        message: data.textarea,
                    };
        
                    fetch("http://localhost:5000/parsonContact", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(contactPerson),
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            Swal.fire({
                                title: "Submitted!",
                                text: "Your data has been submitted.",
                                icon: "success",
                            });
                            console.log(data);
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
            });
        };
      
        console.log(watch("example"));

        console.log(user)
    return (
       <>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
            <div className="modal-box">
            <div className="bk">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                       <div className="flex gap-5">
                                            <div className="mt-5">
                                                    <p className="mr-2">First Name</p>
                                                    <input  type="text" className="w-full text-black placeholder-black  rounded py-2"  {...register("firstName", { required: true })}  />
                                                </div>
                                                <div className="mt-5">
                                                    <p className="mr-2">Last name</p>
                                                    <input  type="text" className="w-full text-black placeholder-black  rounded py-2"  {...register("lastName", { required: true })}  />
                                                </div>
                                            </div>
                                        <div className="mt-5">
                                            <p className="mr-2">Company / Organization</p>
                                            <input  type="text" className="w-full text-black placeholder-black  rounded py-2"  {...register("company", { required: true })}  />
                                        </div>
                                        <div className="mt-5">
                                            <p className="mr-2">Company email</p>
                                            <input  type="email" value={user?.email}  className="w-full text-black placeholder-black  rounded py-2"  {...register("Email", { required: true })}  />
                                        </div>
                                        <div className="mt-5">
                                            <p className="mr-2">Phone</p>
                                            <input  type="number" className="w-full text-black placeholder-black  rounded py-2"  {...register("number", { required: true })}  />
                                        </div>
                                        <div className="mt-5">
                                            <p className="mr-2">Price</p>
                                            <input  type="number" value={price} className="w-full text-black placeholder-black  rounded py-2"  {...register("text", { required: true })}  />
                                        </div>
                                        <div className="mt-5">
                                            <p className="mr-2">Section</p>
                                            <input  type="text" value={name} className="w-full text-black placeholder-black  rounded py-2"  {...register("section", { required: true })}  />
                                        </div>
                                        <div className="mt-5 border border-black rounded">
                                            <label htmlFor="textarea" className="mr-2 ">Message</label>
                                            <textarea
                                            id="textarea"
                                            className="w-full placeholder-black rounded py-6"
                                             {...register("textarea", { required: true })}
                                            />
                                             {errors.textarea && <p>This field is required</p>}
                                            </div>
                                        {errors.exampleRequired && <span>This field is required</span>}
                                        
                                        {
                                            user?<input className="btn mt-5" type="submit" />:<p className="text-center p-5 bg-red-500 rounded">First sing up or login then Contact</p>
                                        }
                                        </form>
                            </div> 
                            <div className="w-[10%] mx-auto mt-7">
                            <label htmlFor="my_modal_6" className="btn text-center">Close!</label>
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