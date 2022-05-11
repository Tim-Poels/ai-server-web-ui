import React from 'react';
import './dashboard.css';
import logo from './logo-becode.png'
import { BiLogOut } from 'react-icons/bi'
import NavbarButton from '../components/NavbarButton';
import { Routes, Route, Link, Outlet } from 'react-router-dom'
import Training from './Training';
import NavbarButton from './NavbarButton';

const Dashboard = (props) => {
    //The message is updated via props
    const footerMessage = "Any issue? Contact your coach!"
    //The username will be updated via Props
    const userName = "Kristine"

  return (  
    <div className='body-container center'>
        <div className='dashboard-container'>
            <div className="main-container">
                <div className="header">
                    {/* Fix this witout position absolute, does not work for smaller screens <1040 px*/}
                    <div className='logo-container'>
                        <img className="logo" src={logo} alt="beCode logo"></img>
                    </div>
                    <div className="title"><h2>Welcome, {userName}</h2></div>
                    <div className="log-out-container">
                        <a href="#"><BiLogOut></BiLogOut></a>
                    </div>
                </div>
                <div className="content-and-navbar-cont">

                    <div className="navbar">    
                        <Link to="launcher">
                            <NavbarButton text={"Training Launcher"}/>
                        </Link>
                        <Link to="queue">
                            <NavbarButton text={"Training Queue"} />
                        </Link>
                        <Link to="past">
                            <NavbarButton text={"Past Trainings"} />
                        </Link>
                    </div>
                    <div className="content">
                        <Outlet />
                        <Training title={"Training Launcher"} />
                    </div>
                </div>
            </div>
            <div className="footer center">
                <p>{footerMessage}</p>
            </div>
        </div>
    </div>
  )
}

export default Dashboard;

