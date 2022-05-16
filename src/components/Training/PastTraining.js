import React, { useEffect, useState } from "react";
import useInterval from '../Hook/useInterval.js'
import styled from "styled-components";
import Past from "./Past.js";
import "./training.css";
import colorNav from "./ColorNav.js";


export default function PastTraining(props) {
	const [trainingPast, setTrainingPast] = useState({ data: [] })

	const fetchMyPast = () => {
		const requestOptions = {
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${myJWT}`
			},
		};

		function showMyData(data) {
			console.log(data)
			setTrainingPast(trainingPast.data = data)
		}

		fetch('http://api.ai-server.becode.org/get_all_training_queue', requestOptions)
			.then(response => response.json())
			.then(data =>
				showMyData(data)
			)
	}

	//let myJWT = document.cookie
	let myJWT = props.jwt
	const delay = 30000

	useEffect(() => {
		colorNav("tab3")
		fetchMyPast()
	}, []);

	useInterval(() => {
		fetchMyPast()
	},
		delay)

	return (
		<Wrapper>
			<TitleContainer>
				<SmallTitleContainer>
					<h1>Past Trainings</h1>
				</SmallTitleContainer>
				<SmallTitleContainer>
					<h3>You have {trainingPast.data.length} trainings done</h3>
					<h4>Refreshing every 30 seconds</h4>
				</SmallTitleContainer>
			</TitleContainer>
			<Past trainingPast={trainingPast} />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	box-shadow: 15px 15px 50px rgba(0, 0, 0, 0.25);
	padding: 20px;
`;

const TitleContainer = styled.div`
	width: 100%;
	display: flex;
	height: 15%;
`;

const SmallTitleContainer = styled.div`
width: 50%;
`;