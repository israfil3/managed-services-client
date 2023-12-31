import { FaFacebook, FaInfo, FaInstagram, FaSchool, FaServer, FaTwitch } from 'react-icons/fa';

const Footer = () => {
    return (
       <>
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
                <p className='text-2xl '>Managed-services.<br/>Providing reliable tech since 2022</p>
                <p className='text-[15px] my-10'>this is company on of the best <br></br> it company in USA</p>
            </div> 
                    <div className='text-[18px]'>
                        <span className="footer-title flex gap-5"><FaServer></FaServer>Services</span> 
                        <a className="link link-hover">First Output</a> 
                        <a className="link link-hover my-2">Job Conform</a> 
                        <a className="link link-hover">Marketing</a> 
                        <a className="link link-hover my-2">100% Support</a>
                    </div> 
                    <div className='text-[18px]'>
                        <span className="footer-title flex gap-5"><FaSchool></FaSchool>Company Details </span> 
                        <a className="link link-hover my-2">About us</a> 
                        <a className="link link-hover">Contact</a> 
                        <a className="link link-hover my-2">Jobs</a> 
                        <a className="link link-hover">Press kit</a>
                    </div> 
                    <div>
                        <span className="footer-title">SIng up 10% off your first order</span> 
                        <input className='px-12 py-5 rounded my-5' type="email" placeholder='Your Email Address'/>
                        <input className='btn btn-outline btn-warning' type="submit" value="Subscribe" />
                        <div className="flex gap-4 text-3xl my-2">
                            <FaInstagram></FaInstagram>
                            <FaFacebook></FaFacebook>
                            <FaTwitch></FaTwitch>
                            <FaInfo></FaInfo>
                        </div>
                    </div>
            </footer>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p className='text-[20px]'>Copyright © 2023 - All right reserved by </p>
                </div>
            </footer>
       </>
    );
};

export default Footer;