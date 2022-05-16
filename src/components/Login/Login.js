import React, { useEffect } from "react";
import styled from "styled-components";
import LoginContainer from "./LoginContainer.js"
import Matrix from "../Matrix.js"
import "./login.css"

export default function Login(props) {
	useEffect(() => {
		Matrix();
	})

	return (
		<div>
			<canvas id="canvasEl"></canvas>
			<LoginPage id="canvas-back">
				<LoginContainer user={props.user} setUser={props.setUser} jwt={props.JWT} setJWT={props.setJWT} />
			</LoginPage>
			
		</div>
		
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