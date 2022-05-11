import React from "react";
import styled from "styled-components";
import LoginContainer from "./LoginContainer.js"
import "./login.css"

export default function Login() {
	return (
		<LoginPage>
			<LoginContainer />
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