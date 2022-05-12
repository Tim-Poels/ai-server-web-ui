import React from "react";
import styled from "styled-components";
import LoginContainer from "./LoginContainer.js"
import "./login.css"

export default function Login(props) {


	return (
		<LoginPage>
			<LoginContainer user={props.user} setUser={props.setUser} jwt={props.JWT} setJWT={props.setJWT} />
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