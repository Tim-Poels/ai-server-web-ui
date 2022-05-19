import { useRef, useState, useEffect } from 'react';
import styled from "styled-components";
import { BiAt, BiCheckShield } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

export default function LoginForm(props) {
	const LOGIN_URL = "https://api.ai-server.becode.org/api/auth"

	//for redirecting after auth
	const navigate = useNavigate();

	//styling
	const lineRef = useRef();
	const coloredLine = () => lineRef.current.style.backgroundColor = "#65C0CE";
	const blackLine = () => lineRef.current.style.backgroundColor = "black";

	//code for setting username and password <------ is this a safe way to store password? 
	const [pwd, setPwd] = useState('');

	//code for setting error messages above the form
	const errRef = useRef();
	const [errMsg, setErrMsg] = useState('');

	useEffect(() => {
		setErrMsg('');
	}, [props.user, pwd])


	const handleSubmit = (e) => {
		e.preventDefault();
		fetch(LOGIN_URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: props.user,
				password: pwd
			})
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.jwt) {
					let container = document.querySelector(".make-dissapear")
					
					for (let i = 0; i < container.childNodes.length; i++) {
						container.childNodes[i].style.animation = "dissapear 0.25s normal";
					}
					
					setTimeout(() => {
						props.setJWT(data.jwt);
						navigate("/dashboard", { replace: true });
					}, "250");
					
				}
				else {
					setErrMsg('Login Failed');
				}

			})
			.catch((err) => {
				console.error("Error:", err)
			})
	}

	return (
		<LoginDiv>
			<p ref={errRef}>{errMsg}</p>
			<form onSubmit={handleSubmit}>
				<EmailDiv>
					<BiAt className="login-icons" />
					<Adiv>
						<Text>Email (@becode.org)</Text>
						<input
							className="login-input-field"
							type="text"
							name="username"
							placeholder="your-name@becode.org"
							onChange={(e) => props.setUser(e.target.value)}
							required
							onClick={coloredLine}
							onPointerLeave={blackLine}
						/>
						<Bdiv ref={lineRef}></Bdiv>
					</Adiv>

				</EmailDiv>
				<PasswordDiv>
					<BiCheckShield className="login-icons" />

					<Adiv>
						<Text>Password</Text>
						<input
							className="login-input-field"
							type="password"
							name="password"
							placeholder="***********"
							onChange={(e) => setPwd(e.target.value)}
							required
							onClick={coloredLine}
							onPointerLeave={blackLine}
						/>
						<Bdiv ref={lineRef}></Bdiv>
					</Adiv>

				</PasswordDiv>
				<ButtonDiv>
					<div>
						<RememberMe type="checkbox" name="checkbox" id="checkbox" />
						<Label HTMLfor="checkbox"> Remember me</Label>
					</div>
					<LoginButton type="submit" value="Login" />
				</ButtonDiv>
			</form>
		</LoginDiv>
	);
}

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
const Adiv = styled.div`
	display: flex;
	flex-direction: column;
`;
//email
const EmailDiv = styled.div`
	width: 40vh;
	display: flex;
	flex-direction: row;
	justify-content: center;
	padding-bottom: 2vh;
`;

//password
const PasswordDiv = styled.div`
	width: 40vh;
	display: flex;
	flex-direction: row;
	justify-content: center;
	padding-bottom: 2vh;
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
const Text = styled.p`
	font-family: "Poppins", sans-serif;
`;
const Bdiv = styled.div`
	height: 0.2vh;
	width: 30vh;
	background-color: black;
	transition: 0.4s;
`;