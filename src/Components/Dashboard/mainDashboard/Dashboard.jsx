import { Link, Outlet } from "react-router-dom";
import './dashboard.css'
// import Contact from "../../Contact/Contact";

const Dashboard = () => {
    return (
   <div className="drawer lg:drawer-open">
     <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col items-center justify-center">
    <div className="">
      {/* <Contact></Contact> */}
    <Outlet></Outlet>
    </div>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side ds">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
         <li>
            <Link to={'/home'}>Home</Link>
         </li>
         <li>
            <Link to={`request`}>Contact request</Link>
         </li>
         <li>
            <Link to={`addService`}>Add Service</Link>
         </li>
         <li>
            <Link to={`manageService`}>Manage Service</Link>
         </li>
         <li>
            <Link to={`man`}>User</Link>
         </li>
            <li>
            <Link to={`dashboard`}>Dashboard</Link>
         </li>
    </ul>
  </div>
</div>
    );
};

export default Dashboard;

