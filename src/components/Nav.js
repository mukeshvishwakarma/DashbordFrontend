import React from "react";
import './CSS/Nav.css'
import logo from "../asset/mukesh111.png";
import { Link, useNavigate } from "react-router-dom";
const Nav = () => {
    const navigate = useNavigate()
    const auth = localStorage.getItem('user');
    const logout = () => {
        localStorage.clear();
        navigate('/Signup')
    }
    return(
        <div>
            <img className="logo" src={logo} alt="LOGO"/>
            { auth ? 
            <ul className="nav-ul">
                <li><Link to='/'>Products</Link></li>
                <li><Link to='/AddProduct'>Add Product</Link></li>
                <li><Link to='/update'>Update Product</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                <li className="nav-right1"><Link onClick={logout} to='/Signup'>Logout ({JSON.parse(auth).name}) </Link></li>
            </ul>
            :
            // 
            <ul className="nav-ul nav-right">
                <li><Link to='/Login'>Login</Link></li>
                   <li> <Link to='/Signup'>Signup</Link></li>
            </ul>
            }
        </div>
    )
}

export default Nav