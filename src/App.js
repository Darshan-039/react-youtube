import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import React, { useState } from 'react';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);
  const [color, setcolor] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }


  const removebodyClass = () => {
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')

  }

  const toggleMode = (cls) => {
    removebodyClass();
    console.log(cls);
    if (cls === 'primary') {
      document.body.classList.add('bg-primary');
      setcolor('primary');
    }
    else if (cls === 'danger') {
      document.body.classList.add('bg-danger');
      setcolor('danger');
    }
    else if (cls === 'success') {
      document.body.classList.add('bg-success');
      setcolor('success');
    }
    else if (cls === 'warning') {
      document.body.classList.add('bg-warning');
      setcolor('warning');
    }

    else if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#454558";
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar Title="Text" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container'>
          {/* <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} color={color} /> */}
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} color={color} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;