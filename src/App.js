import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type) => {
    setAlert({
    message: message,
    type: type})

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  const toogleMode = ()=>
  {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark Has Been Enabled', 'success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Has Been Enabled', 'success');
    }
  }
  return (
    <>
    <Router>
    <Navbar title = "TextUtils" mode= {mode} tooglemode={toogleMode}/>
    <Alert alert={alert}/>
    <div className="container my-4">
    <Routes>
        <Route exact path='/' element={<TextForm showAlert={showAlert} title= "Please Enter Text to Analyze." mode={mode}/>}/>
        <Route  path='/about' element={<About/>}/>
      </Routes>
        </div>
     </Router>
    </>
  );
}

export default App;
