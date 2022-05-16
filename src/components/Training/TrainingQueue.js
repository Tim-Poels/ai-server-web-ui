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

	if (trainingQueue.data.length === 0) {
		return (
			<Wrapper>

				<BoxTitle>Training Launcher</BoxTitle>
				<Cont>
					<h3 className="center"> You have 0 trainings in queue</h3>
				</Cont>


			</Wrapper>
		)
	}
	else {
		return (
			<Wrapper>
				<TitleContainer>
					<SmallTitleContainer>
						<h1>Training Queue</h1>
					</SmallTitleContainer>
					<SmallTitleContainer>
						<h3>You have {trainingQueue.data.length} trainings in Queue</h3>
						<h4>Refreshing every 30 seconds</h4>
					</SmallTitleContainer>
				</TitleContainer>
				<Queue trainingQueue={trainingQueue} />
			</Wrapper>
		);
	}

}

const Wrapper = styled.div`
height: 100%;
width: 100%;
box-shadow: 15px 15px 50px rgba(0, 0, 0, 0.25);
padding: 20px;
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

const Cont = styled.div`
	height: 80%;
	width: 100%;
`

const TitleContainer = styled.div`
	width: 100%;
	display: flex;
	height: 15%;
`;

const SmallTitleContainer = styled.div`
width: 50%;

`;
