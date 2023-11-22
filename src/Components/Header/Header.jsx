
import Banner from "../Homepage/Banner/Banner";
import Complex from "../Homepage/Complex/Complex";
import Contact from "../Contact/Contact";
import Do from "../Homepage/Do/Do";
import Item from "../Homepage/MyItem/Item";
import Reviewed from "../Homepage/Reviewed/Reviewed";
import Company from "../Homepage/company/Company";
import Profile from "../Homepage/profile/Profile";

const Header = () => {
    return (
        <>
            <Banner></Banner>
            <Reviewed></Reviewed>  
            <Complex></Complex> 
            <Item></Item>
            <Profile></Profile>
            <Do></Do>
            <Company></Company>
            <Contact></Contact>

        
        
        </>
    );
};

export default Header;