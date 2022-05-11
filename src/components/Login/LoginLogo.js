import React from "react";
import styled from "styled-components";
import logo from "../../images/logo-becode.png";

export default function LoginLogo() {
  return (
    <Adiv>
      <img className="login-imag" alt="Image is brok :((" src={logo}></img>;
    </Adiv>
  )
}

const Adiv = styled.div`
	height: 30vh;
	width: 50vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;