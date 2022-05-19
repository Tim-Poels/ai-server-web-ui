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
			</div>
		);
	} else {
		let queue = [];
		for (let i = 0; i < trainingPast.data.length; i++) {
			let data = trainingPast.data[i];
			queue.push(
				<Bdiv key={i} id={i} className={"background-change"}>
					<Cdiv className="getpadding">{data.containerId}</Cdiv>
					<Cdiv>
						{data.status}
					</Cdiv>
					<Cdiv>
						<a href={data.artifactsUrl}>{data.artifactsUrl}</a>
					</Cdiv>
					<Cdiv>{data.finishDate}</Cdiv>
				</Bdiv>
			);
		}
		return (
			<div className="queue">
				<QueueHeader>
					<Cdiv>Container Details</Cdiv>
					<Cdiv>Status</Cdiv>
					<Cdiv>Artifacts</Cdiv>
					<Cdiv>Finish Date</Cdiv>
				</QueueHeader>
				<Adiv>{queue}</Adiv>
			</div>
		);
	}
}


const QueueHeader = styled.div`
	display: flex;
	height: 15%;
	flex-direction: row;
	justify-content: space-around;
	width: 100%;
	font-family: "Poppins", sans-serif;
	font-weight: 600;
	border-bottom: 1px solid black;
`;


const Adiv = styled.div`
	display: flex;
	flex-direction: column;
	height: 85%;
	width: 100%;
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
  	overflow-wrap: anywhere;
  	display: flex;
  	justify-content: center;
  	align-items: center;
`;
