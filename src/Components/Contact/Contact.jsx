import { useForm } from "react-hook-form";
import { FaCheck } from "react-icons/fa6";
import './contact.css'
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const Contact = () => {
    const {user} = useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
       if(user && user.email){
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
                        email: user?.email,
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
        }
    };
    
  
    console.log(watch("example"));
    return (
        <div className="w-[90%] my-20  mx-auto">
                      <h1 className="bg-slate-200 w-[130px] py-4 my-5 pl-2 shadow-lg rounded">CONTACT US</h1>
                    <div className="flex justify-between items-center">
                        <div className="">
                            <div className="">
                                <p className="text-5xl font-bold">Partner with Us for <br /> Comprehensive IT</p>
                            </div> 
                            <h1 className="my-10 text-[19px]">We’re happy to answer any questions you may have and help <br /> you determine which of our services best fit your needs.</h1>
                            <p className="text-2xl font-bold my-7">Call us at: 01929254784</p>
                            
                            <div className="">
                               <h1 className="font-bold my-5">Your benefits:</h1>
                               <div className="grid grid-cols-2 gap-10">
                                     <h4 className="flex items-center"><span className="bg-blue-400 p-2 rounded-full mr-4"><FaCheck></FaCheck></span>Client-oriented</h4>
                                     <h4 className="flex items-center"><span className="bg-blue-400 p-2 rounded-full mr-4"><FaCheck></FaCheck></span>Independent</h4>
                                     <h4 className="flex items-center"><span className="bg-blue-400 p-2 rounded-full mr-4"><FaCheck></FaCheck></span>Competent</h4>
                                     <h4 className="flex items-center"><span className="bg-blue-400 p-2 rounded-full mr-4"><FaCheck></FaCheck></span>Results-driven</h4>
                                     <h4 className="flex items-center"><span className="bg-blue-400 p-2 rounded-full mr-4"><FaCheck></FaCheck></span>Problem-solving</h4>
                                     <h4 className="flex items-center"><span className="bg-blue-400 p-2 rounded-full mr-4"><FaCheck></FaCheck></span>Transparent</h4>
                               </div>
                            </div>
                            <div className="">
                                <h1 className="font-bold my-5">What happens next?</h1>
                                <div className="flex gap-5 text-[17px]">
                                    <div className="flex items-center">
                                        <h1 className="text-2xl font-bold mr-5">
                                         1
                                        </h1>
                                        <p>We Schedule a call at your convenience</p>
                                    </div>
                                    <div className="flex items-center">
                                        <h1 className="text-2xl font-bold mr-5">2</h1>
                                      <p>We do a discovery and consulting meting </p>
                                    </div>
                                    <div className="flex items-center">
                                        <h1 className="text-2xl font-bold mr-5">3</h1>
                                     <p> We prepare a proposal </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-200 p-20 rounded shadow-xl">
                            <div className="">
                                <h1 className="font-bold text-center">Schedule a Free Consultation</h1>
                                <hr className="border-2 border-b-gray-900"/>
                            </div>
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
                                            <input type="email" className="w-full text-black placeholder-black  rounded py-2"  {...register("email", { required: true })}  />
                                        </div>
                                        <div className="mt-5">
                                            <p className="mr-2">Phone</p>
                                            <input  type="number" className="w-full text-black placeholder-black  rounded py-2"  {...register("number", { required: true })}  />
                                        </div>
                                        <div className="mt-5">
                                            <p className="mr-2">Section</p>
                                                <select
                                                    className="  rounded py-2 w-full  text-black"
                                                    {...register("section")}
                                                >
                                                    <option value="Select Option">Select Option</option>
                                                    <option value="Managed Services">Managed Services</option>
                                                    <option value="IT Consulting &amp; Advisory">IT Consulting &amp; Advisory</option>
                                                    <option value="Cyber Security">Cyber Security</option>
                                                    <option value="Web Development">Web Development</option>
                                                    <option value="Mobile Development">Mobile Development</option>
                                                    <option value="Cloud Services">Cloud Services</option>
                                                    <option value="Other">Other</option>

                                                </select>
                                            </div>
                                            <div className="mt-5">
                                                <label htmlFor="textarea" className="mr-2">Message</label>
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
                        </div>
                    </div>
        </div>
    );
};

export default Contact;



                                    {/* <label htmlFor="firstName">First name</label>
                                    <input type="text" name="firstName" id="firstName" />
                                    <label htmlFor="lastName">Last name</label>
                                    <input type="text" name="lastName" id="lastName" />
                                    <label htmlFor="company">Company / Organization</label>
                                    <input type="text" name="company" id="company" />
                                    <label htmlFor="email"></label>
                                    <input type="email" name="email" id="email" />
                                    <label htmlFor="firstName">First name</label>
                                    <input type="text" name="firstName" id="firstName" /> */}