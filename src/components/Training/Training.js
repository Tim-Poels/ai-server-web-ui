import React, { useEffect } from "react";
import "./training.css";
import TrainingInput from "./TrainingInput.js";
import styled from "styled-components";
import colorNav from "./ColorNav.js";

function Training() {
	useEffect(() => {
		colorNav("tab1")
	});
	return (
		<Wrapper>
			<BoxTitle>Training Launcher</BoxTitle>
			<InputCont>
				<TrainingInput
					title={"DockerHub image slug"}
					placeholder={"DockerHub_username/image_name"}
				/>
				<TrainingInput title={"Volume"} placeholder={"/output"} />
				<ButtonCont>
					<button className="submitButton">Submit</button>
				</ButtonCont>
			</InputCont>
		</Wrapper>
	);
}

export default Training;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 110%;
	margin-left: 50px;
	width: 100%;
	box-shadow: 15px 15px 50px rgba(0, 0, 0, 0.25);
	padding: 20px;
	padding-left: 40px;
	padding-right: 30px;
`;

const BoxTitle = styled.h2`
	height: 20%;
	width: 100%;
	color: black;
	font-family: "poppins", sans-serif;
	font-style: normal;
	font-size: 36px;
	font-weight: 600;
	text-align: center;
`;

const InputCont = styled.div`
	display: flex;
	flex-direction: column;
	height: 80%;
  width: 75%;
`;

const ButtonCont = styled.div`
	height: 17.5%;
	width: 35%;
	align-self: flex-end;
	margin-top: 25px;
`;
