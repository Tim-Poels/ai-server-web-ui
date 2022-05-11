import React, { useRef } from "react";
import styled from "styled-components";

export default function LoginInput({ textString, placeholder}) {
  
  const lineRef = useRef();

	const coloredLine = () => {
		lineRef.current.style.backgroundColor = "#65C0CE";
	};

	const blackLine = () => {
		lineRef.current.style.backgroundColor = "black";
	};

  return (
    <Adiv>
      <Text>{textString}</Text>
			<Input
				className="login-input-field"
        placeholder={placeholder}
				style={{ border: "none" }}
				onClick={coloredLine}
				onPointerLeave={blackLine} />
			<Bdiv ref={lineRef}></Bdiv>
    </Adiv>
  )
}

const Adiv = styled.div`
	display: flex;
	flex-direction: column;
`;

const Text = styled.p`
	font-family: "Poppins", sans-serif;
`;

const Input = styled.input`
	font-family: "Poppins", sans-serif;
	width: 30vh;
	outline: none;
  color: black;
`;

const Bdiv = styled.div`
	height: 0.2vh;
	width: 30vh;
	background-color: black;
	transition: 0.4s;
`;