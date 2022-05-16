import React, { useEffect } from "react";
import styled from "styled-components";
import colorChange from "./colorChange.js";

export default function Past({ trainingPast }) {
	useEffect(() => {
		colorChange();
	});
	if (trainingPast.data.length === 0) {
		return (
			<div className="queue">
				<Subtitle>You have 0 trainings done</Subtitle>
			</div>
		);
	} else {
		let queue = [];
		for (let i = 0; i < trainingPast.data.length; i++) {
			let data = trainingPast.data[i];
			queue.push(
				<Bdiv key={i} id={i} className={"background-change"}>
					<Cdiv>{data.containerId}</Cdiv>
					<Cdiv>{data.status}</Cdiv>
					<Cdiv>{data.artifactsUrl}</Cdiv>
					<Cdiv>{data.finishDate}</Cdiv>
				</Bdiv>
			);
		}
		return (
			<div className="queue">
				<AmountQueued>
					You have {trainingPast.data.length} trainings done.{" "}
				</AmountQueued>
				<QueueHeader>
					<Cdiv>Container Details</Cdiv>
					<Cdiv>Status</Cdiv>
					<Cdiv>artifacts</Cdiv>
					<Cdiv>finish Date</Cdiv>
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
	width: 80%;
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
	height: 50%;
	width: 80%;
	overflow-y: scroll;
	overflow-x: hidden;
	scrollbar-width: thin;
	scrollbar-color: black white; 

	
	
`;

const Bdiv = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
`;

const Cdiv = styled.div`
	width: 25%;
	text-align: center;
	font-family: "Poppins", sans-serif;
  font-size: 15px;
  overflow-wrap: break-word;
`;
