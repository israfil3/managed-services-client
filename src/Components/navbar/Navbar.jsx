import { useContext, useState } from 'react';
import './navbar.css'
import { FaBars,FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const {logout,user} = useContext(AuthContext)

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    const singOut = () =>{
      Swal.fire({
         title: "Are you sure?",
         text: "Log out this page",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes!"
       }).then((result) => {
         if (result.isConfirmed) {
           Swal.fire({
             title: "Deleted account!",
             text: "Log out successful.",
             icon: "success"
           });
           logout()
            .then(() => {
               // Sign-out successful.
            }).catch((error) => {
               console.log(error)
            });
               }
        });
      }
  
    return (
        <>
        <nav>
           <div className=''>
                 <a href="">
                   <img className='w-[5%] rounded-xl' src="https://cdn.vectorstock.com/i/1000x1000/06/62/management-business-logo-template-concept-vector-31080662.webp" alt="" />
                    </a>
           </div>
               
               <div className="menu-item">
                <ul id='item-link' className={menuOpen ? 'active' : ''}>
                    <li>
                      <Link>Home</Link>
                    </li>
                    <li>
                       <Link>product</Link>
                    </li>
                    <li>
                      <Link>cart</Link>
                    </li>
                    <li>
                     {
                        user?<Link onClick={singOut}>Log out</Link>:<Link to={`login`}>Login</Link>
                     }  
                    </li>
                    <li>
                       <Link to={`dashboard`}>Dashboard</Link>
                    </li>
                </ul>  
               </div>
            <div onClick={toggleMenu}  className="menu-bar flex justify-center items-center lg:hidden md:hidden">
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>
        </nav>
        </>
    );
};

export default Navbar;