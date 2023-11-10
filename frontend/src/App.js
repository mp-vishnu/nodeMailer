import './App.css';
import Home from './components/Home';
import Email from './components/Email';
import Form from './components/Form';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
     {/* <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/email" element={<Email />} />
      </Routes>
    </Router> */}
    <Form/>
    </>
  );
}

export default App;
