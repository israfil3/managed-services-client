import img1 from '../../../assets/Profile/img1.png'
import img2 from '../../../assets/Profile/img2.png'
import img3 from '../../../assets/Profile/img3.png'
import img4 from '../../../assets/Profile/img4.png'
import './profile.css'

const Profile = () => {
    return (
        <div className='dk lg:grid grid-cols-4 gap-5 w-[90%] mx-auto my-10'>
            <div className="lk">
                <img src={img1} alt="" />
                <h1>Cost-effectiveness</h1>
                <p>We offer affordable IT solutions that help you reduce costs and improve your bottom line.</p>
            </div>
            <div className="lk">
                <img src={img2} alt="" />
                <h1>Innovative Technology</h1>
                <p>We stay up-to-date with the latest technology trends and offer innovative solutions that help you stay ahead of the competition</p>
            </div>
            <div className="lk">
                <img src={img3} alt="" />
                <h1>Industry Expertise</h1>
                <p>We specialize in serving specific industries, such as healthcare, finance, or manufacturing, and offer tailored solutions that meet your unique needs.</p>
            </div>
            <div className="lk">
                <img src={img4} alt="" />
                <h1>Scalability</h1>
                <p>Our solutions are scalable and can grow with your business, ensuring that you get the most value out of your investment.</p>
            </div>
        </div>
    );
};

export default Profile;