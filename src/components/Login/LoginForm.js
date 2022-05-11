import React from "react";
import styled from "styled-components";
import LoginInput from "./LoginInput.js";
import { BiAt, BiCheckShield } from "react-icons/bi";

export default function LoginForm() {
	return (
		<LoginDiv>
			<EmailDiv>
				<BiAt className="login-icons" />
				<LoginInput
					placeholder="your-name@becode.org"
					textString="Email (@becode.org)"
				/>
			</EmailDiv>
			<PasswordDiv>
				<BiCheckShield className="login-icons" />
				<LoginInput placeholder="***********" textString="Password" />
			</PasswordDiv>
			<ButtonDiv>
				<div>
					<RememberMe type="checkbox" name="checkbox" id="checkbox" />
					<Label HTMLfor="checkbox"> Remember me</Label>
				</div>
				<LoginButton type="submit" value="Login" />
			</ButtonDiv>
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

const Div = styled.div`
	height: 0.2vh;
	width: 30vh;
	background-color: black;
	transition: 0.4s;
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
