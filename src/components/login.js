import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
// import BusinessPatner from "../pages/businessPatner";
import '../components/login.css'
import Logo from '../images/eastvantage_logo.png'
import { useJwt, decodeToken } from "react-jwt";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";

export default function App() {
  const { setAuth } = useContext(AuthContext)


  const [credentials, setCredentials] = useState({ email: "", password: "" })
  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log('printing credentials', credentials);
    try {
      const response = await axios.post('/api/users/login2/', JSON.stringify({ email: credentials.email, password: credentials.password }),
        {
          headers: {
            "content-type": 'application/json',
            // withCredentials: true
          },
        }
      )
      console.log(JSON.stringify(response.data))
      const accessToken = response?.data?.access
      console.log('accesstoken received', accessToken)
      const decodedToken = decodeToken(accessToken)
      console.log(decodedToken)
      const roles = [decodedToken.user_role] 
      console.log(roles)
      const user = decodedToken.user
      const pwd = credentials.password
  

      
      console.log(roles)
      setAuth({user, pwd, roles, accessToken})
      if (roles[0] ==="SENIOR_BUSINESS_PARTNER") {
        navigate("/businessPatner", { replace: true });
      } else {
        navigate("/employee-details", { replace: true });
        
      }
    } catch (error) {

      if(!error.response){
       console.log('no reply from server')
      }
    }
  }

    // const response = await fetch("http://localhost:8000/api/users/login2/", {
    //   method: 'POST',
    //   mode: 'cors',
    //   headers: {

    //     "content-type": 'application/json',
    //   },

    //   body: JSON.stringify({ email: credentials.email, password: credentials.password })

    // });

  //   const json = await response.json()
  //   if (response.ok) {
  //     const myDecodedToken = decodeToken(json.access);
  //     console.log(json.access)

  //     console.log(myDecodedToken)
  //     localStorage.setItem('user', json.access);

  //     navigate("/businessPatner", { replace: true });
  //   }
  //   else {
  //     alert("invalid credentials");
  //   }

  // }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (<>
    <section className="login-box">
      <div className="container">
        <div className="card-box">
          <div className="Logo-img">
            <img src={Logo} alt="" width={200} />
          </div>
          <form onSubmit={handelSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" onChange={onChange} name="email" id="email" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" onChange={onChange} name="password" id="password" />
            </div>
            <button type="submit" className="butt-login">Submit</button>
          </form>
        </div>
      </div>
    </section>
  </>
  );
}