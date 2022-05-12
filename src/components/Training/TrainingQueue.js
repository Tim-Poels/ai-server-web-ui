import React, { useEffect } from "react";
import styled from 'styled-components';
import Queue from "./Queue.js"
import "./training.css";
import colorNav from "./ColorNav.js";


export default function TrainingQueue({trainingQueue}) {
	useEffect(() => {
		colorNav("tab2")
	});
  return (
		<Wrapper>
			<BoxTitle>Training Queue</BoxTitle>
			<Queue trainingQueue={trainingQueue}/>
		</Wrapper>
	);
}

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
	margin-left: auto;
	margin-right: auto;
	font-family: "poppins", sans-serif;
	font-style: normal;
	font-size: 36px;
	font-weight: 600;
	line-height: 28px;
`;