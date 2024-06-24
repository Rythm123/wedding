import React, { useEffect, useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [mobile, setMobile] = useState('');
    const [registeredMobile, setRegisteredMobile] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showError,setShowError]=useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        getRegisteredMobile();
    }, []);

    const getRegisteredMobile = async () => {
        try {
            const data = await fetch('https://cdn.builder.io/api/v3/content/webusers?apiKey=83c63d0712bc49a08269b91fadef8128&cacheSeconds=0&staleCacheSeconds=0');
            const json = await data.json();
            console.log(json);
            setRegisteredMobile(json?.results || []);
        } catch (e) {
            console.log(e);
        }
    };

    const handleChange = (e) => {
        setMobile(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!mobile) return;
        if (registeredMobile.length === 0) return;

        registeredMobile.forEach((user) => {
            if (Number(user.data.userMobile )=== mobile) {
                console.log('login successful');
                localStorage.setItem('authenticated', "true");
                localStorage.setItem('user', JSON.stringify(user));
                setIsAuthenticated(true);
            } else {
                console.log('authentication failed');
               
            }
        });

        setShowError(true)

        console.log('clicked');
    };

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated,navigate]);

    return (
        <div className='login-wrapper'>
            <img src="https://media-api.xogrp.com/images/bc55924f-dd46-4b8d-bc6a-a000af974687~rt_auto-rs_768.h?ordering=explicit" alt="banner" />

            <div className="login-form">
                <input
                    type="number"
                    value={mobile}
                    onChange={handleChange}
                    placeholder='Enter your Mobile Number'
                />
                <button onClick={(e)=>handleSubmit(e)} disabled={!mobile}>Login</button>
            </div>
            {showError && <p style={{textAlign:'center'}}>Please login using correct mobile number</p>}
        </div>
    );
};

export default Login;
