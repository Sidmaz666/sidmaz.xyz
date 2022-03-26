import React from 'react'

import Loader from './components/loader'
import Nav from './components/nav'
import Intro from './components/intro'
import Contain from './components/contain'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './styles/style.css'

function App() {
  return (
      <>
	<Router>
	<Loader timeout={5000} state={true}/>
	<Nav/>
	  <Routes>

	    <Route exact path="/" element={<><Intro/><Contain/></>}/>

	  </Routes>
	</Router>
      </>
  );
}

export default App;
