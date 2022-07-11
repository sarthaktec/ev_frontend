import React, {useContext} from 'react'
import '../components/navbar.css'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthProvider'


const Header = () => {
    const { setAuth } = useContext(AuthContext)
    const navigate = useNavigate();

    const logOut = () =>{
        localStorage.clear();
        setAuth({})
    }

    return (
        <nav className="navbar">
            <div className="container-fluid">
                <a className="navbar-brand" href='/dashboard'>Eastvantage</a>
                <form className="d-flex">
                    <button className="btn btn-logout" onClick={logOut} type="logout">Logout</button>
                </form>
            </div>
        </nav>
    )
}

export default Header