import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PatientProfile from './Components/PatientProfile'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PatientProfile/>} />
      </Routes>
    </Router>
  );
}

export default App;
