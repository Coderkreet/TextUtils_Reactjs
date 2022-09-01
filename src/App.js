import './App.css';
import Navbar from './component/Navbar';
import Card from './component/Card';
import TextForm from './component/TextForm';
import Aleart from './component/Aleart';
// import About from './component/About';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


//======================================================



import React, { useState } from 'react'
function App() {
const removeClass = ()=>{
document.body.classList.remove('bg-light')
document.body.classList.remove('bg-success')
document.body.classList.remove('bg-warning')
document.body.classList.remove('bg-danger')
document.body.classList.remove('bg-dark')

}


  // Enable Dark Mode:-
  let [mode, setMode] = useState('light');
  let toggleMode = (cls) => {

    removeClass();
document.body.classList.add('bg-'+cls);
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      ShowAert("Dark mode has been enable", "success");
      document.title= "TextUtils-Dark-Mode"
    
}
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      ShowAert("Light mode has been enable", "success");
      document.title= "TextUtils-Light-Mode"

    }
  }




  //   Shoew Alert Message:-
  let [alert, SetAert] = useState(null);
  let ShowAert = (message, type) => {
    SetAert({
      msg: message,
      type: type

    })
    setTimeout(() => {
      SetAert(null)
    }, 2000);

  }

  return (
    <>
  {/* <BrowserRouter> */}
      <Navbar title="kreet" mode={mode} toggleMode={toggleMode} />
      <Aleart alert={alert}/>
      <div className="container my-5">
        <TextForm ShowAert={ShowAert} title="Enter text here" mode={mode} heading ={"TextUtils - Word Counter And More..."}/>
      {/* <Routes>
          <Route exact path="/about" element={ <About mode ={mode}/>}/>
          <Route exact path="/" element ={<TextForm ShowAert={ShowAert} title="Enter text here" mode={mode}/>}/>  
        </Routes> */}
        <Card title="krunal" mode={mode} />
      </div>
     
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
