import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import Training from './components/Training.js';
import Login from './components/Login/Login.js';

function App() {



  return (
    <BrowserRouter>
      <Routes>

        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Training />} />
          <Route path="launcher" element={<Training title={"Training Launcher"} />} />
          <Route path="queue" element={<div>Here will come the QUEUE</div>} />
          <Route path="past" element={<div>Here will come the PAST</div>} />
        </Route>


        <Route index element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
