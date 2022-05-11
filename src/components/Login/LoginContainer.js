import React from "react";
import styled from "styled-components";
import LoginLogo from "./LoginLogo.js";
import LoginTitle from "./LoginTitle.js";
import LoginForm from "./LoginForm.js";
import LoginFooter from "./LoginFooter.js";
import LoginGitLink from "./LoginGitLink.js";

export default function LoginContainer() {
  return (
		<LoginContainerDiv>
			<LoginLogo />
			<LoginBackground>
				<LoginTitle />
				<LoginForm />
        <LoginFooter />
			</LoginBackground>
      <LoginGitLink />
		</LoginContainerDiv>
	);
}

//main container
const LoginContainerDiv = styled.div`
	height: 100vh;
	width: 50vh;
	display: flex;
	flex-direction: column;
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