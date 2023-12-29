import { FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";
import loginF from '../../../login.json'
import Lottie from "lottie-react";
import './login.css'
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
    const {loginK} = useContext(AuthContext)

    const loginUser = (event) => {
        event.preventDefault()
        const form = event.target;
        const email =form.email.value;
        const password = form.password.value
        console.log(email,password);
        loginK(email,password)
        .then(result=> {
            const user = result.user;
            event.target.reset();
            console.log(user)
        })
        .catch(error => {
            const errorMassage = error.massage;
            console.log(errorMassage)
        })
    }   
    return (
 <div className='lg:flex gap-24 items-center justify-center w-[80%] mx-auto px-10 my-20 border shadow-xl'>
        <div className="">
                <Lottie animationData={loginF}></Lottie>
        </div>
        <div className="">
            <form onSubmit={loginUser} className='form-area text-center '>
                        <input type="email" name="email" id="email"  placeholder='Entry your Email'/><br />
                        <input type="password" name="password" id="password"  placeholder='Entry your password' required/><br />
                        <input className='btn my-5 btn-outline btn-error' type="submit" value="Login" /><br />
                        <p className='tx'>Ar you a new user now<Link to={'/sing'} className='text-blue-500'> Sing Up </Link>  </p>
                        <hr className='border-4 my-5 w-48 mx-auto border-green-500'/>
                    </form>
                    <div className="mx-auto text-center">
                        <button  className='btn btn-outline btn-error' ><FaGoogle className='mx-3 text-2xl text-center'/>Login with Google</button><br /><br />
                    </div>  
            </div>
    </div>
    );
};

export default Login;