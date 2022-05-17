import React from 'react';
import './dashboard.css';
import logo from './logo-becode.png'
import { BiLogOut } from 'react-icons/bi'
import NavbarButton from '../components/NavbarButton.jsx';
import { Link, Outlet } from 'react-router-dom'
import styled from 'styled-components';
import { useEffect,useRef } from 'react';
import Matrix from '../components/Matrix.js';
import { useNavigate } from "react-router-dom";



const Dashboard = (props) => {
	const footerMessage = "Any issue? Contact your coach!";
	//The username will be updated via Props
	const userName = props.user;

	const tab_1 = useRef()
    const tab_2 = useRef()
    const tab_3 = useRef()

	const nav_1 = useRef()
	const nav_2 = useRef()
	const nav_3 = useRef()

    const delay = (ms) => new Promise(res => setTimeout(res, ms))

	useEffect(() => {
		Matrix();

	})

	useEffect(() => {
        const myDelay = 500

        async function waitBeforeAnimate(){
            await delay (1000)
            await animateMe(tab_1)
			await animateMe(nav_1)
            await delay (myDelay)
            await endingStyle(tab_1)
            await endingStyle(nav_1)
            await animateMe(tab_2)
            await animateMe(nav_2)
            await delay (myDelay)
            await endingStyle(tab_2)
            await endingStyle(nav_2)
            await animateMe(tab_3)
            await animateMe(nav_3)
            await delay (myDelay)
            await endingStyle(tab_3)
            await endingStyle(nav_3)

        }

        //prevent styling to go back to initial state
        async function endingStyle(x){
            console.log("endingStyle")
            x.current.style.opacity = 1;
        }

        async function animateMe(currentTab) {
         await currentTab.current.animate([
            { opacity: 1 }
         
         ],
         {
            // temporisation
            duration: myDelay,
            iterations: 1
          }

          )
         console.log("animateStep")
        } 
        waitBeforeAnimate()
		
	},[]);
	

	});

	const navigate = useNavigate();
  

	const canvasStyle = {
  	opacity: 0.5,
	};	

	//funtion to delete cookies on logout
	const deleteBothCookies = (cname1, cname2) => {
		document.cookie = `${cname1}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
		document.cookie = `${cname2}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
	}


  
	//animation on logout
	const logoutAnim = () => {
		let container = document.getElementsByClassName(
			"dashboard-container"
		)[0];
		let content =
			document.getElementsByClassName("main-container")[0];
		let footer = document.getElementsByClassName('footer')[0];
		footer.style.animation = "reverse-footer 1.25s normal";
		content.style.animation = "reverse-content-opacity 1.25s normal";
		container.style.animation = "reverse-stretch 1.25s normal";
		
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

								<Link to=""
									onClick={() => {
										deleteBothCookies("jwt", "username")
										logoutAnim()

										setTimeout(() => {
												navigate("/sign-in", { replace: true })
										}, "1250"); 
									}}>
									<BiLogOut />
								</Link>
							</div>
						</div>
						<div className="horLine"></div>
						<div className="content-and-navbar-cont">
							<div className="navbar">
								<Adiv>
									<NavButtParent ref={nav_1}>
									<Link to="launcher">
										<NavbarButton text={"Training Launcher"} nmbr={1}  />
									</Link>
									</NavButtParent>
									<NavButtParent ref={nav_2}>
									<Link to="queue">
										<NavbarButton text={"Training Queue"} nmbr={2}  />
									</Link>
									</NavButtParent>
									<NavButtParent ref={nav_3}>
									<Link to="past">
										<NavbarButton text={"Past Trainings"} nmbr={3}  />
									</Link>
									</NavButtParent>
								</Adiv>
								<Bdiv>
									<Ddiv  className="tab1" ref={tab_1}></Ddiv>
									<Ddiv  className="tab2" ref={tab_2}></Ddiv>
									<Ddiv  className="tab3" ref={tab_3}></Ddiv>
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
	animation-name: lineV;
	animation-duration: 2s;  
	animation-iteration-count: normal;
	transition-timing-function: ease-in-out;
`;

const Ddiv = styled.div`
	padding: 0;
	height: 0;
	width: 0;
	border: 4px solid black;
	border-radius: 100%;
	background-color: black;
	opacity:0;
`;

const NavButtParent = styled.div`
	opacity:0;
`;

	//function timing herer
// const styles = styled.animation`
// {
// 	 ${spin} 2s linear infinite
// 	}`;
	
