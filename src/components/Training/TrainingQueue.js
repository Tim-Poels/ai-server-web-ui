import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Queue from "./Queue.js"
import "./training.css";
import colorNav from "./ColorNav.js";


export default function TrainingQueue(props) {
	useEffect(() => colorNav("tab2"));

	const [trainingQueue, setTrainingQueue] = useState({ data: [] })

	useEffect(() => {
		const requestOptions = {
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${props.jwt}`
			},
		};

		fetch('http://api.ai-server.becode.org/get_user_training_queue', requestOptions)
			.then(response => response.json())
			.then(data => {
				console.log(data)
				setTrainingQueue(data)
			})
	}, [props.jwt])


	return (
		<Wrapper>
			<BoxTitle>Training Queue</BoxTitle>
			<Queue trainingQueue={trainingQueue} />
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
	height: 20%;
	width: 100%;
	color: black;
	font-family: "poppins", sans-serif;
	font-style: normal;
	font-size: 36px;
	font-weight: 600;
	text-align: center;
	margin-bottom: 70px;
`;