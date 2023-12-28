import { useState } from "react";
import axios from "axios";


const Request = () => {
    const [massage, setMassage] = useState([]);
        axios.get(`http://localhost:5000/parsonContact`)
        .then(response => {
            console.log(response.data);
            setMassage(response.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    return (
        <div>
           <div className="table table-zebra ">
                <table className="table table-zebra ">
                    <thead>
                        <tr>
                            <th>NO</th>
                            <th>Name</th>
                            <th>Company Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Service Item</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        massage.map(mas => <>
                                <tr id={mas._id} className="">
                                    <th>1</th>
                                    <td>{mas.firstName+" "+mas.lastName}</td>
                                    <td>{mas.companyName}</td>
                                    <td>{mas.companyEmail}</td>
                                    <td>{mas.phone}</td>
                                    <td>{mas.services}</td>
                                    <td>{mas.massage}</td>
                                    <div className="">
                                        <button className="btn btn-sm btn-primary mr-2">Approve</button>
                                        <button className="btn btn-sm btn-secondary">Delete</button>
                                    </div>
                                 </tr>
                                    
                            </>)
                    }
                    
                    </tbody>
                </table>
                </div>
        </div>
    );
};

export default Request;

