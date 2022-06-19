import React from 'react'
import HomePage from './pages/home'
import ErrorPage from './pages/error'
import AdminPage from './pages/admin'
import BlogPage from './pages/blog'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './styles/style.css'

function App() {
  return (
      <>
	<Router>
	  <Routes>

	  <Route exact path="/" 
  	   element={
	       <>
	  	<HomePage/>
	       </>
	    }
	/>

	<Route exact path="/blog"
	  element={
	    <>
	      <BlogPage/>
	   </>
	  }
	/>


	<Route exact path="/login"
	  element={
	    <>
	      <AdminPage/>
	   </>
	  }
	/>


	<Route exact path="/*"
	  element={
	    <>
	      <ErrorPage/>
	   </>
	  }
	/>

	  </Routes>
	</Router>
      </>
  );
}

export default App;
