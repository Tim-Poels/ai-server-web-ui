import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import Training from "./components/Training/Training.js";
import Login from './components/Login/Login.js';
import TrainingQueue from './components/Training/TrainingQueue.js';
import PastTraining from "./components/Training/PastTraining.js";
import React, { useState, useEffect } from 'react';





//API will give the data on tringing queue here
//DUMMY DATA FOR TESTING
/*
const trainingQueue = {
	data: [
		{
			positionInQueue: "1",
			dockerImageName: "This is name 1",
			dockerVolume: "11 MB",
		},
		{
			positionInQueue: "2",
			dockerImageName: "Name 2",
			dockerVolume: "45 GB",
		},
		{
			positionInQueue: "3",
			dockerImageName: "idk im tired 3",
			dockerVolume: "69,420 TB",
		},
	],
};
*/
/*
const trainingPast = {
	data: [
		{
			containerId: "container_id",
			status: "Done",
			artifactsUrl: "artifact_url",
			finishDate: "3/2/1 - 12:39:56",
		},
		{
			containerId: "container_id",
			status: "Done",
			artifactsUrl: "artifact_url",
			finishDate: "4/2/0 - 17:29:36",
		},
		{
			containerId: "container_id",
			status: "Done",
			artifactsUrl: "artifact_url",
			finishDate: "1/2/3 - 04:32:51",
		},
	],
};
*/

function App() {
	const [user, setUser] = useState('');
	const [JWT, setJWT] = useState('');

	const [trainingPast, setTrainingPast] = useState({ data: [] })
	const [trainingQueue, setTrainingQueue] = useState([])

	const requestOptions = {
		method: 'GET',
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${JWT}`
		},
	};

	const fetchPastTrainings = () => {

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

	const fetchTrainingQueue = () => {

		fetch('http://api.ai-server.becode.org/get_user_training_queue', requestOptions)
			.then(response => response.json())
			.then(data => {
				console.log(data)
				setTrainingQueue(data)
			})
	}
	useEffect(() => {

		fetchPastTrainings()
		fetchTrainingQueue()

	}, [JWT])
	//Issue here that on login page in the console there are errors because we dont have a JWT yet. however the app is still functional. 


	return (
		<BrowserRouter>
			<Routes>
				<Route path="/dashboard" element={<Dashboard jwt={JWT} user={user} />}>
					<Route index element={<Training jwt={JWT} />} />
					<Route
						path="launcher"
						element={<Training jwt={JWT} />}
					/>
					<Route
						path="queue"
						element={<TrainingQueue trainingQueue={trainingQueue} />}
					/>
					<Route
						path="past"
						element={<PastTraining trainingPast={trainingPast} />}
					/>
				</Route>

				<Route index element={<Login user={user} setUser={setUser} jwt={JWT} setJWT={setJWT} />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
