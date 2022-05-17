import React from "react";
import styled from "styled-components";

export default function LoginGitLink() {
  return (
		<LinkDiv  className="make-appear">
			<GitLink href="https://www.github.com" target="_blank">
				GitHub Repository
			</GitLink>
		</LinkDiv>
	);
}


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
