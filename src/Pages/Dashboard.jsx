import React from 'react';
import './dashboard.css';
import logo from './logo-becode.png'
import { BiLogOut } from 'react-icons/bi'
import NavbarButton from '../components/NavbarButton.jsx';
import { Link, Outlet } from 'react-router-dom'
import styled from 'styled-components';
import { useEffect } from 'react';
import Matrix from '../components/Matrix.js';



const Dashboard = (props) => {
	const footerMessage = "Any issue? Contact your coach!";
	//The username will be updated via Props
	const userName = props.user;
	useEffect(() => {
		Matrix();
	});
	
	const canvasStyle = {
  	opacity: 0.5,
	};	

	//funtion to delete cookies on logout
	const deleteBothCookies = (cname1, cname2) => {
		document.cookie = `${cname1}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
		document.cookie = `${cname2}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
	}

	return (
		<div className="canvas-container">
			<canvas id="canvasEl" style={canvasStyle}></canvas>
			<div className="body-container center canvas-back">
				<div className="dashboard-container">
					<div className="main-container">
						<div className="header">
							{/* Fix this witout position absolute, does not work for smaller screens <1040 px*/}
							<div className="logo-container">
								<img className="logo" src={logo} alt="beCode logo"></img>
							</div>
							<div className="title">
								<h1>Welcome, {userName}</h1>
							</div>
							<div className="log-out-container">
								<Link to="/sign-in" onClick={() => deleteBothCookies("jwt", "username")}>
									<BiLogOut />
								</Link>
							</div>
						</div>
						<div className='horLine'></div>
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
									<Ddiv className="tab1"></Ddiv>
									<Ddiv className="tab2"></Ddiv>
									<Ddiv className="tab3"></Ddiv>
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
		</div>
	);
}

export default Dashboard;

const Adiv = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding-left: 50px;
	padding-right: 50px;
	padding-top: 25%;
	padding-bottom: 25%;
`;

const Bdiv = styled.div`
	height: 100%;
	width: 0;
	border: 1px solid black;
	background-color: black;
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding-bottom: 25%;
	padding-top: 25%;
`;

const Ddiv = styled.div`
	padding: 0;
	height: 0;
	width: 0;
	border: 4px solid black;
	border-radius: 100%;
	background-color: black;
`;