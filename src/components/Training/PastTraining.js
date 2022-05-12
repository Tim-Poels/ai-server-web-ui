import React from "react";
import styled from "styled-components";
import Past from "./Past.js";
import "./training.css";

export default function PastTraining({ trainingPast }) {
	return (
		<Wrapper>
			<BoxTitle>Past Trainings</BoxTitle>
			<Past trainingPast={trainingPast} />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 55vh;
	width: 40vw;
	box-shadow: 15px 15px 50px rgba(0, 0, 0, 0.25);
	padding: 30px;
`;

const BoxTitle = styled.h2`
	margin-left: auto;
	margin-right: auto;
	font-family: "poppins", sans-serif;
	font-style: normal;
	font-size: 36px;
	font-weight: 600;
	line-height: 28px;
`;
