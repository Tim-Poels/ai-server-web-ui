import React, { useEffect } from "react";
import styled from "styled-components";

export default function Queue({ trainings }) {
  useEffect(() => {
		changeColors();
	});
	if (trainings.data.length === 0) {
		return (
			<div className="queue">
				<Subtitle>There are 0 Trainings in queue</Subtitle>
			</div>
		);
	} else {
		let queue = [];
		for (let i = 0; i < trainings.data.length; i++) {
			let data = trainings.data[i];
			queue.push(
				<Bdiv key={i} id={i} className={"background-change"}>
					<Cdiv>{data.positionInQueue}</Cdiv>
					<Cdiv>{data.dockerImageName}</Cdiv>
					<Cdiv>{data.dockerVolume}</Cdiv>
				</Bdiv>
			);
		}
		return (
			<div className="queue">
				<AmountQueued>
					There are {trainings.data.length} trainings in queue.{" "}
				</AmountQueued>
				<QueueHeader>
					<Cdiv>Position in Queue</Cdiv>
					<Cdiv>Docker Image</Cdiv>
					<Cdiv>Docker Volume</Cdiv>
				</QueueHeader>
				<Adiv>{queue}</Adiv>
			</div>
		);
	}
}

const Subtitle = styled.h2`
	font-family: "Poppins", sans-serif;
	font-weight: bold;
	padding-bottom: 100px;
`;

const QueueHeader = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	width: 100%;
	font-family: "Poppins", sans-serif;
	font-weight: 600;
	border-bottom: 1px solid black;
`;

const AmountQueued = styled.h2`
	height: 20%;
	width: 100%;
	font-family: "Poppins", sans-serif;
	font-weight: bold;
	text-align: center;
`;

const Adiv = styled.div`
	display: flex;
	flex-direction: column;
	height: 60%;
	width: 100%;
	overflow-y: scroll;
	overflow-x: hidden;
`;

const Bdiv = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
`;

const Cdiv = styled.div`
	width: 33%;
	text-align: center;
	font-family: "Poppins", sans-serif;
`;

const changeColors = () => {
	let items = document.getElementsByClassName("background-change");
	for (let i = 0; i < items.length; i++) {
		let el = items[i];
		if (el.id % 2 == 0) {
			el.style.backgroundColor = "lightgrey";
		}
	}
};
