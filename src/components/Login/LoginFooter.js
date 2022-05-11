import React from "react";
import styled from "styled-components";

export default function LoginFooter() {
  return (
		<Footer>
			<FooterText>Any issue? Contact your coach!</FooterText>
		</Footer>
	);
}

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
