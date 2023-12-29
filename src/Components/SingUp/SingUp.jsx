import { FaGoogle } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import sing from '../../../sing.json'
import Lottie from "lottie-react";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";



const SingUp = () => {
    const navigate = useNavigate()
    const {createUser,googleSing} = useContext(AuthContext)
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const singMethod = (event) => {
        event.preventDefault()
        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value
        const email =form.email.value;
        const password = form.password.value
        const url = form.url.value;
        createUser(email,password)
        .then(result => {
            const user = result.user;
            axios.post(`http://localhost:5000/userParson`,{
                name: firstName+" "+lastName,
                email:email
            })
            .then(data => {
                console.log(data.data)
                navigate(from , {replace: true})
                event.target.reset();
                console.log(user)
            })
        })
        .catch(error=>{
            console.log(error)
        } )
        console.log(name,email,password,url)
    }
    const googleMethod = () => {
        googleSing()
        .then((result)=>{
            const parson = result.user;
            console.log(parson)
            navigate(from , {replace: true})

        }).catch((error)=> {
            const errorMassage = error.massage
            console.log(errorMassage)
        })
    }
    return (
        <div className='lg:flex gap-24 items-center w-[80%] mx-auto px-10 my-20 border shadow-xl'>
            <div className="">
                <Lottie animationData={sing}></Lottie>
            </div>
                <div className='text-center'>
         <form onSubmit={singMethod}  className='form-area text-center'>
                <input type="text" name="firstName" id="name"  placeholder='Entry Your First Name'required/><br />
                <input type="text" name="lastName" id="name"  placeholder='Entry Your Last Name'required/><br />
                <input type="email" name="email" id="email"  placeholder='Entry your Email'/><br />
                <input type="password" name="onlyPassword" id="password" placeholder='Entry your password' required/><br />
                <input type="url" name="url" id="url"  placeholder='Entry Your Photo Url' required/><br />
                <input className='btn my-5 btn-outline btn-error' type="submit" value="Sing Up" /><br />
                <p className='tx'>Al-ready you have a account now<Link to={'/login'} className='text-green-500'> Log in </Link>  </p>
                <hr className='border-4 my-5 w-48 mx-auto border-green-500'/>
                
            </form>
            <div className="mx-auto text-center">
                <button  onClick={googleMethod} className='btn btn-outline btn-error' ><FaGoogle className='mx-3 text-2xl text-center'/>Sing up with Google</button><br /><br />
            </div>
            
                </div>
        </div>

    );
};

export default SingUp;