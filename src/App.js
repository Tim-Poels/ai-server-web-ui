import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import Training from "./components/Training/Training.js";
import Login from './components/Login/Login.js';
import TrainingQueue from './components/Training/TrainingQueue.js';

//API will give the data on tringing queue here
const trainings = {
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

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Training />} />
          <Route path="launcher" element={<Training title={"Training Launcher"} />} />
          <Route path="queue" element={<TrainingQueue trainings={trainings}/>} />
          <Route path="past" element={<div>Here will come the PAST</div>} />
        </Route>


        <Route index element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
