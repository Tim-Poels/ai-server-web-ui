import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard';
import ErrorPage from './Pages/ErrorPage';
import Training from './components/Training';

function App() {



  return (
    <BrowserRouter>
      <Routes>

        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Training />} />
          <Route path="launcher" element={<Training />} />
          <Route path="queue" element={<div>Here will come the QUEUE</div>} />
          <Route path="past" element={<div>Here will come the PAST</div>} />
        </Route>


        <Route index element={<div>Here will come the logins</div>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
