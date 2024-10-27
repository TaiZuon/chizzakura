import React from "react";

import { useNavigate } from "react-router-dom";

import "../styles/LoginRegister.css";

import logoImg from "../assets/Image_C/logo.jpg";

const UM_C_Register = () => {

    const navigate = useNavigate();

    return (
        <div className="register-page">
            <div className="register-container">
                <img src={logoImg} alt="logo-page" />
                <h1>Chizza</h1>

                <form className="register-form">

                    <div className="user-name form-group">
                        <label htmlFor="Name">Name:</label>
                        <input
                            type="text"
                            name="Name"
                            id="Name"
                            placeholder="Enter your name" 
                        />
                    </div>

                    <div className="phone form-group">
                        <label htmlFor="Phone">Phone:</label>
                        <input
                            type="number"
                            name="Phone"
                            id="Phone"
                            placeholder="Enter your phone number" 
                        />
                    </div>

                    <div className="user-login-name form-group">
                        <label htmlFor="Login_Name">Login Name:</label>
                        <input
                            type="text"
                            name="Login_Name"
                            id="Login_Name"
                            placeholder="Enter your login name" 
                        />
                    </div>

                    <div className="user-password form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter your password" 
                        />
                    </div>
                                        
                    <button type="submit" className="register-btn" onClick={() => navigate('/profile')}>Register</button>

                    <div className="had-account">
                        <p>Have an account yet?</p>
                        <a href="/login">Login</a>
                    </div>
                </form>
            </div>

        </div>
    )

}

export default UM_C_Register;