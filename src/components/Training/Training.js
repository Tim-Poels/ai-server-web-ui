import React, { useEffect, useRef, useState } from "react";
import "./training.css";
import styled from "styled-components";
import colorNav from "./ColorNav.js";

function Training(props) {
	//styling
	useEffect(() => colorNav("tab1"));
	const lineRef = useRef()
	const coloredLine = () => lineRef.current.style.backgroundColor = "#65C0CE"
	const blackLine = () => lineRef.current.style.backgroundColor = "black"


	const [img, setImg] = useState('')
	const [volume, setVolume] = useState('/output')

	//code for setting error or success messages above the form
	const errRef = useRef();
	const [errMsg, setErrMsg] = useState('');

	const handleSubmit = (e) => {
		console.log(volume)
		e.preventDefault();

		const requestOptions = {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${props.jwt}`
			},
			body: JSON.stringify(
				{ docker_image_name: img.toLowerCase(), volume: volume }
			)
		};


		fetch('http://api.ai-server.becode.org/send_training_to_queue', requestOptions)
			.then(response => response.json())
			.then(data => {
				console.log(data)
				if ("error" in data) {
					setErrMsg(data.error)
				}
				else if ("success" in data) {
					setErrMsg(data.success)
				}
			})
			.catch((err) => {
				console.error("Error:", err)
			})

	}


	return (
		<Wrapper>
			<BoxTitle>Training Launcher</BoxTitle>
			<InputCont>
				<p ref={errRef}>{errMsg}</p>
				<form onSubmit={handleSubmit}>
					<div className='input-field-div'>
						<h3 className='input-title'>DockerHub image slug</h3>
						<input
							className='input-field'
							type="text"
							onChange={(e) => setImg(e.target.value)}
							required
							placeholder="DockerHub_username/image_name"
							style={{ border: "none" }}
							onClick={coloredLine}
							onPointerLeave={blackLine}
						/>
						<div className='input-line' ref={lineRef}></div>
					</div>
					<div className='input-field-div'>
						<h3 className='input-title'>Volume</h3>
						<input
							className='input-field'
							type="text"
							onChange={(e) => setVolume(e.target.value)}
							placeholder="/output"
							style={{ border: "none" }}
							onClick={coloredLine}
							onPointerLeave={blackLine}
						/>
						<div className='input-line' ref={lineRef}></div>
					</div>
					<ButtonCont>
						<button type="submit" className="submitButton">Submit</button>
					</ButtonCont>
				</form>

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
