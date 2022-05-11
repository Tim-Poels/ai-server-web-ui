import React, { useRef } from "react";
import styled from "styled-components";
import logo from "../images/logo-becode.png";
import { BiAt, BiCheckShield } from "react-icons/bi";

export default function Login() {

  const lineRef = useRef();

	const coloredLine = () => {
		lineRef.current.style.backgroundColor = "#65C0CE";
	};

	const blackLine = () => {
		lineRef.current.style.backgroundColor = "black";
	};

	return (
		<LoginPage>
			<LoginContainer>
				<LogoDiv>
					<img className="login-imag" alt="Image is brok :((" src={logo}></img>
				</LogoDiv>
				<LoginBackground>
					<TitleDiv>
						<Title>AI Server</Title>
					</TitleDiv>
					<LoginDiv>
						<EmailDiv>
							<BiAt className="login-icons" />
							<AnotherEmailDiv>
								<EmailText>Email (@becode.org)</EmailText>
								<EmailInput
									className="input-field"
									style={{ border: "none" }}
									onClick={coloredLine}
									onPointerLeave={blackLine}
								/>
								<Div ref={lineRef}></Div>
							</AnotherEmailDiv>
						</EmailDiv>
						<PasswordDiv>
							<BiCheckShield className="login-icons" />
							<AnotherPasswordDiv>
								<PasswordText>Password</PasswordText>
								<PasswordInput
									className="input-field"
									style={{ border: "none" }}
									onClick={coloredLine}
									onPointerLeave={blackLine}
								/>
								<Div ref={lineRef}></Div>
							</AnotherPasswordDiv>
						</PasswordDiv>
						<ButtonDiv>
							<div>
								<RememberMe type="checkbox" name="checkbox" id="checkbox" />
								<Label HTMLfor="checkbox"> Remember me</Label>
							</div>
							<LoginButton type="submit" value="Login" />
						</ButtonDiv>
					</LoginDiv>
					<Footer>
						<FooterText>Any issue? Contact your coach!</FooterText>
					</Footer>
				</LoginBackground>
				<LinkDiv>
					<GitLink href="https://www.github.com" target="_blank">
						GitHub Repository
					</GitLink>
				</LinkDiv>
			</LoginContainer>
		</LoginPage>
	);
}

//The whole page
const LoginPage = styled.div`
	height: 100vh;
	width: 100vw;
	overflow: hidden;
	background-color: #011322;
	display: flex;
	justify-content: center;
`;

//main container
const LoginContainer = styled.div`
	height: 100vh;
	width: 50vh;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

//contains the becode logo
const LogoDiv = styled.div`
	height: 30vh;
	width: 50vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

//Container of the main content
const LoginBackground = styled.div`
	height: 60vh;
	width: 50vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: white;
	border-radius: 15%;
	overflow: hidden;
`;

//container of the title
const TitleDiv = styled.div`
	width: 50vh;
	height: 10vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
`;

//the title
const Title = styled.h1`
	width: 50vh;
	text-align: center;
	font-family: "Roboto", sans-serif;
`;

//container of the login form
const LoginDiv = styled.div`
	width: 50vh;
	height: 30vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 2.5vh;
`;

//the form
//email
const EmailDiv = styled.div`
	width: 40vh;
	display: flex;
	flex-direction: row;
	justify-content: center;
	padding-bottom: 2vh;
`;

const AnotherEmailDiv = styled.div`
	display: flex;
	flex-direction: column;
`;

const EmailText = styled.p`
	font-family: "Poppins", sans-serif;
`;

const EmailInput = styled.input`
	font-family: "Poppins", sans-serif;
	width: 30vh;
	outline: none;
`;

const Div = styled.div`
	height: 0.2vh;
	width: 30vh;
	background-color: black;
	transition: 0.4s;
`;

//password
const PasswordDiv = styled.div`
	width: 40vh;
	display: flex;
	flex-direction: row;
	justify-content: center;
	padding-bottom: 2vh;
`;

const AnotherPasswordDiv = styled.div`
	display: flex;
	flex-direction: column;
`;

const PasswordText = styled.p`
	font-family: "Poppins", sans-serif;
`;

const PasswordInput = styled.input`
	font-family: "Poppins", sans-serif;
	width: 30vh;
	outline: none;
`;

//remember me and button
const ButtonDiv = styled.div`
	width: 30vh;
	display: flex;
	justify-content: space-between;
	margin-left: 2vw;
`;

const RememberMe = styled.input``;

const Label = styled.label`
	font-family: "Poppins", sans-serif;
`;

const LoginButton = styled.input`
	width: 10vh;
	height: 3vh;
	border: 0;
	border-radius: 15px;
	font-family: "Source Code Pro", monospace;
	font-weight: bolder;
	color: white;
	background-color: #319b3f;
`;

//the footer
const Footer = styled.div`
	width: 50vh;
	height: 5vh;
	background-color: #f5f5f5;
	text-align: center;
	display: flex;
	align-items: center;
`;

const FooterText = styled.p`
	width: 50vh;
	font-family: "Source Code Pro", monospace;
`;

//div that contains the link to the git repo
const LinkDiv = styled.div`
	height: 10vh;
	width: 50vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

//Link to the github page
const GitLink = styled.a`
	color: lightblue;
	font-family: "Source Code Pro", monospace;
`;
