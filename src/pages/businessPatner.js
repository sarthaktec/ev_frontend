import React, { useState, useEffect } from 'react'
import "../pages/businesspatner.css"
import Navbar from '../components/navbar'
import { Link } from 'react-router-dom';
import axios from 'axios';



const BusinessPatner = () => {

    const [employees, setEmployees] = useState([]);
    const [singleusers, setSingleUsers] = useState([]);
    // const [loguser , setLogUser] = usestate([]);

    useEffect(()=>
    {
    axios.get("http://65.20.79.112/BHRMongo/api/employee/GetEmployeeDetailsByEmail/vishnu.prakash@eastvantage.com")
    .then((response) => 
    // setLogUser(response.data),
    setEmployees(response.data.employees))
    .then((error) => console.log(error))
    },[]
    );

    const onChange = (e) => {
            console.log(e.target.value)
            setSingleUsers(employees.find((o) => o.workEmail === e.target.value ))

    }
    return (
        <>
            <Navbar />
            <div className='container bus-con'>
                <h2 className='.bus-con-head'>Employee Name: Vishnu Padmanabhan</h2>
                <h4 className='.bus-con-head'>Designation: Senior Business Partner</h4>
                <h6 className='.bus-con-head'>Employee ID: 3388</h6>
            </div>
            <div className='container filter-bus'>
                <form action="/action_page.php">
                    <div className='row'>
                        <div className='col-md-6'>
                            <h6>Filter By Employee Details</h6>
                        </div>
                        <div className='col-md-6'>
                            <select className='form-control' onChange={onChange} >
                            <option>Select Employee</option>
                            {employees.map((employees)=>
                                <option  key={employees.workEmail} value={employees.workEmail}>{employees.firstName}</option>)}
                            </select>
                        </div>
                    </div>
                </form>
            </div>
            <div className='container' id='EmployeeDetails'>
                <form>
                    
                    <table>
                        <tr>
                            <td>First Name</td>
                            <td>Full Name</td>
                            <td>work Email</td>
                            <td>Original Hire Date:</td>
                            <td>Pay Rate Effective Date:</td>
                            <td>Department:</td>
                        </tr>
                        <tr>
                        
                        <td>{singleusers.firstName}</td>
                        <td>{singleusers.fullName1}</td>
                        <td>{singleusers.workEmail}</td>
                        <td>{singleusers.originalHireDate}</td>
                        <td>{singleusers.payRateEffectiveDate}</td>
                        <td>{singleusers.department}</td>
                        </tr>
                    </table>
                </form>
                <Link to="/employee-details"><button className='attrilink'> Attrition Page </button></Link>
            </div>
        </>
        )
}

export default BusinessPatner