import { FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";
import sing from '../../../../sing.json'
import Lottie from "lottie-react";


const SingUp = () => {
    return (
        <div className='flex gap-24 items-center w-[80%] mx-auto px-10 my-20 border shadow-xl'>
            <div className="">
                <Lottie animationData={sing}></Lottie>
            </div>
                <div className='text-center'>
                <form  className='form-area text-center'>
                <input type="text" name="name" id="name"  placeholder='Entry Your Name'required/><br />
                <input type="email" name="email" id="email"  placeholder='Entry your Email'/><br />
                <input type="password" name="onlyPassword" id="password" placeholder='Entry your password' required/><br />
                <input type="password" name="conformPassword" id="password"  placeholder='Conform your password' required/><br />
                <input type="url" name="url" id="url"  placeholder='Entry Your Photo Url' required/><br />
                <input className='btn my-5 btn-outline btn-error' type="submit" value="Sing Up" /><br />
                <p className='tx'>Al-ready you have a account now<Link to={'/login'} className='text-green-500'> Log in </Link>  </p>
                <hr className='border-4 my-5 w-48 mx-auto border-green-500'/>
                
            </form>
            <div className="mx-auto text-center">
                <button  className='btn btn-outline btn-error' ><FaGoogle className='mx-3 text-2xl text-center'/>Sing up with Google</button><br /><br />
            </div>
            
                </div>
        </div>

    );
};

export default SingUp;