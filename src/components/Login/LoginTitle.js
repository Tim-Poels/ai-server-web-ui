import React from "react";
import styled from "styled-components";

export default function LoginTitle() {
  return (
		<TitleDiv className="make-appear">
			<Title>AI Server</Title>
		</TitleDiv>
	);
}

const TitleDiv = styled.div`
	width: 50vh;
	height: 10vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
`;

const Title = styled.h1`
	width: 50vh;
	text-align: center;
	font-family: "Roboto", sans-serif;
`;