import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
        setAlert({
          msg: message,
          type: type
        })

      setTimeout(() => {
        setAlert(null);
      }, 1000);
  }

  const toggleMode = ()=>{
    if(Mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#0d4166';
      showAlert("Enabled dark mode","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Enabled light mode","success")
    }
  }
  return (
    <>
    {/* <Router> */}

    <Navbar title="TextUtils"  aboutText="About TextUtils" Mode={Mode} toggleMode = {toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
    {/* <Switch> */}
          {/* <Route path="/about">
            <About />
          </Route> */}
          {/* <Route path="/"> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze"  Mode={Mode}/>
          {/* </Route> */}
        {/* </Switch> */}
          
          
         
    
    </div>
    {/* </Router> */}

    </>
  );
}

export default App;
