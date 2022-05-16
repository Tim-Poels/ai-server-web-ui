import React, { useEffect, useState } from "react";
import useInterval from '../Hook/useInterval.js'
import styled from "styled-components";
import Past from "./Past.js";
import "./training.css";
import colorNav from "./ColorNav.js";



export default function PastTraining(props) {
	const [trainingPast, setTrainingPast] = useState({ data: [] })

	//let myJWT = document.cookie
	let myJWT = props.jwt
	const delay = 3000
	useEffect(() => {
		colorNav("tab3")

	}, []);

	useInterval(
		() => {
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

		},
		delay
	)


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
