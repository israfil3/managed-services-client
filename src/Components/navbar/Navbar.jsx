import { useContext, useState } from 'react';
import './navbar.css'
import { FaBars,FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const {logout} = useContext(AuthContext)

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
           <div>
                 <a href="">
                    <svg id="logo-14" width="73" height="49" viewBox="0 0 73 49" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M46.8676 24C46.8676 36.4264 36.794 46.5 24.3676 46.5C11.9413 46.5 1.86765 36.4264 1.86765 24C1.86765 11.5736 11.9413 1.5 24.3676 1.5C36.794 1.5 46.8676 11.5736 46.8676 24Z" className="ccustom" fill="#68DBFF"></path> <path d="M71.1324 24C71.1324 36.4264 61.1574 46.5 48.8529 46.5C36.5484 46.5 26.5735 36.4264 26.5735 24C26.5735 11.5736 36.5484 1.5 48.8529 1.5C61.1574 1.5 71.1324 11.5736 71.1324 24Z" className="ccompli1" fill="#FF7917"></path> <path d="M36.6705 42.8416C42.8109 38.8239 46.8676 31.8858 46.8676 24C46.8676 16.1144 42.8109 9.17614 36.6705 5.15854C30.5904 9.17614 26.5735 16.1144 26.5735 24C26.5735 31.8858 30.5904 38.8239 36.6705 42.8416Z" className="ccompli2" fill="#5D2C02"></path> </svg>
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
                       <Link to={`sing`}>SingUp</Link>
                    </li>
                    <li>
                       <Link to={`login`}>Login</Link>
                    </li>
                    <li>
                     <Link onClick={singOut}>Log out</Link>
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