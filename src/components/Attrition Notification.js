import React, {useEffect,useState} from 'react'
import DatepickerComponent from '../components/date.picker.component'
import axios from 'axios';


const AttritionNotification = () => {

    const [users, setUsers] = useState([]);
    useEffect(()=>{axios.get(`http://127.0.0.1:4000/api/users/`)
    .then(res => {
    setUsers(res.data)
    })},[]
    )

    return (<>
        <h1>Attrition Notification</h1>

        <table className='emp-tab'>
            <tbody>
                <tr>
                    <td>Employee Name:</td>
                    <td>
                        <form action="/action_page.php">
                            <select id="userid" name="userid" >
                                {users.map((user) =>
                                    <option key={user.name} value={user.name}>{user.name}</option>)}
                            </select>
                        </form>

                    </td>
                </tr>
                <tr>
                    <td>Employee Number:</td>
                    <td>3300</td>
                </tr>
                <tr>
                    <td>Account Department:</td>
                    <td>Devops</td>
                </tr>
                <tr>
                    <td>Attrition Type:</td>
                    <td>

                        <form action="/action_page.php">
                            <select id="cars" name="cars">
                                <option value="volvo">select Attrion type</option>
                                <option value="volvo">Voluntary</option>
                                <option value="saab">Terminated</option>
                            </select>
                        </form>

                    </td>
                </tr>
                <tr>
                    <td>Reason of Separation:</td>
                    <td>Termination, Better opportuninty</td>
                </tr>
                <tr>
                    <td>Last Day Of Work:</td>
                    <td><DatepickerComponent /></td>
                </tr>
                <tr>
                    <td>Date Of Hire:</td>
                    <td>20/12/31</td>
                </tr>
                <tr>
                    <td>Ressignation Letter:</td>
                    <td>Attached In email</td>
                </tr>
                <tr>
                    <td>Rehire Eligibility:</td>
                    <td>Attached In email</td>
                </tr>
            </tbody>
        </table>
        {/* end of attrition */}
    </>

    )
}

export default AttritionNotification