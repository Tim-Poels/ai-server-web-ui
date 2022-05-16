import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import Training from "./components/Training/Training.js";
import Login from './components/Login/Login.js';
import TrainingQueue from './components/Training/TrainingQueue.js';
import PastTraining from "./components/Training/PastTraining.js";
import React, { useState } from 'react';


function App() {
	const [user, setUser] = useState('');
	const [JWT, setJWT] = useState('');

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
						element={<TrainingQueue jwt={JWT} />}
					/>
					<Route
						path="past"
						element={<PastTraining jwt={JWT} />}
					/>
				</Route>

				<Route index element={<Login user={user} setUser={setUser} jwt={JWT} setJWT={setJWT} />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>		
		</BrowserRouter>
	);
}

export default App;
