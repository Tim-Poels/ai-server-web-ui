import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './Pages/Dashboard.jsx';
import Training from "./components/Training/Training.js";
import Login from './components/Login/Login.js';
import TrainingQueue from './components/Training/TrainingQueue.js';
import PastTraining from "./components/Training/PastTraining.js";
import React, { useState } from 'react';


function App() {
	const [user, setUser] = useState('');
	const [JWT, setJWT] = useState('');

	//function to get a cookie
	const getCookie = (cname) => {
		let name = cname + "=";
		let decodedCookie = decodeURIComponent(document.cookie);
		let ca = decodedCookie.split(';');
		for (let i = 0; i < ca.length; i++) {
			let c = ca[i];
			while (c.charAt(0) === ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) === 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}


	//If user has logged in and didnt click "remember me" aka no cookies in the storage
	if (JWT) {
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
					<Route path="*" element={<Navigate to="/" replace={true} />} />

				</Routes>
			</BrowserRouter>
		);
	}
	//If there are cookies in the local storage 	
	else if (getCookie("jwt")) {
		let JWT = getCookie("jwt")
		let user = getCookie("username")
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

					<Route path="sign-in" element={<Login user={user} setUser={setUser} jwt={JWT} setJWT={setJWT} />} />
					<Route path="/" element={<Navigate to="/dashboard" replace={true} />} />
					<Route path="*" element={<Navigate to="/" replace={true} />} />
				</Routes>
			</BrowserRouter>
		);
	}
	//If there are no cookies and user is not logged in
	else {
		return (
			<BrowserRouter>
				<Routes>
					<Route path="*" element={<Navigate to="/" replace={true} />} />
					<Route path="/" element={<Login user={user} setUser={setUser} jwt={JWT} setJWT={setJWT} />} />
				</Routes>
			</BrowserRouter>
		)
	}


}

export default App;
