import React from 'react';
import './dashboard.css';
import logo from './logo-becode.png'
import { BiLogOut } from 'react-icons/bi'
import NavbarButton from '../components/NavbarButton.jsx';
import { Link, Outlet } from 'react-router-dom'
import styled from 'styled-components';



const Dashboard = (props) => {
    //The message is updated via props
    const footerMessage = "Any issue? Contact your coach!"
    //The username will be updated via Props
    const userName = props.user

  return (
		<div className="body-container center">
			<div className="dashboard-container">
				<div className="main-container">
					<div className="header">
						{/* Fix this witout position absolute, does not work for smaller screens <1040 px*/}
						<div className="logo-container">
							<img className="logo" src={logo} alt="beCode logo"></img>
						</div>
						<div className="title">
							<h2>Welcome, {userName}</h2>
						</div>
						<div className="log-out-container">
						<Link to="/"> 
							<BiLogOut />
						</Link>
						</div>
					</div>
					<div className="content-and-navbar-cont">
						<div className="navbar">
							<Adiv>
								<Link to="launcher">
									<NavbarButton text={"Training Launcher"} nmbr={1} />
								</Link>
								<Link to="queue">
									<NavbarButton text={"Training Queue"} nmbr={2} />
								</Link>
								<Link to="past">
									<NavbarButton text={"Past Trainings"} nmbr={3} />
								</Link>
							</Adiv>
							<Bdiv>
								<Cdiv>
									<Ddiv className="tab1"></Ddiv>
									<Ddiv className="tab2"></Ddiv>
									<Ddiv className="tab3"></Ddiv>
								</Cdiv>
							</Bdiv>
						</div>
						<div className="content">
							<Outlet />
						</div>
					</div>
				</div>
				<div className="footer center">
					<p>{footerMessage}</p>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;

const Adiv = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem 50px;
`;

const Bdiv = styled.div`
    height: 100%;
    width: 0;
    border: 1px solid black;
    background-color: black;
    align-items: center;
`;

const Cdiv = styled.div`
	height: 100%;
	width: 0;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding-top: 5.3rem;
	padding-bottom: 5.3rem;
	align-items: center;
`;

const Ddiv = styled.div`
	padding: 0;
	height: 0;
	width: 0;
	border: 4px solid black;
	border-radius: 100%;
	background-color: black;
`;