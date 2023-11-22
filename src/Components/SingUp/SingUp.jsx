import { FaGoogle } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import sing from '../../../sing.json'
import Lottie from "lottie-react";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";



const SingUp = () => {
    const navigate = useNavigate()
    const {createUser,googleSing} = useContext(AuthContext)
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const singMethod = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email =form.email.value;
        const password = form.password.value
        const url = form.url.value;
        if(password.length < 6){
            return alert('at list 6 digit password now')
        }
        createUser(email,password)
        .then(result => {
            const user = result.user;
            navigate(from , {replace: true})
            event.target.reset();
            console.log(user)
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
        <div className='flex gap-24 items-center w-[80%] mx-auto px-10 my-20 border shadow-xl'>
            <div className="">
                <Lottie animationData={sing}></Lottie>
            </div>
                <div className='text-center'>
         <form onSubmit={singMethod}  className='form-area text-center'>
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
                <button  onClick={googleMethod} className='btn btn-outline btn-error' ><FaGoogle className='mx-3 text-2xl text-center'/>Sing up with Google</button><br /><br />
            </div>
            
                </div>
        </div>

    );
};

export default SingUp;