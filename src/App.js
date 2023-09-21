import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import About from './components/About'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


const App = () => {
  const apiKey = process.env.REACT_APP_NewsHub_API;

  const pageSize = 6;

  const [progress, setProgress] = useState(0)

    return (
      <Router>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
      />
        <Routes>
          <Route exact path='/' element={<News setProgress={setProgress} key='general' pageSize={pageSize} country='in' apiKey={apiKey} category='general'/>}></Route>
          <Route exact path='/general' element={<News setProgress={setProgress} key='general' pageSize={pageSize} country='in' apiKey={apiKey} category='general'/>}></Route>
          <Route exact path='/business' element={<News setProgress={setProgress} key='business' pageSize={pageSize} country='in' apiKey={apiKey} category='business'/>}></Route>
          <Route exact path='/technology' element={<News setProgress={setProgress} key='technology' pageSize={pageSize} country='in' apiKey={apiKey} category='technology'/>}></Route>
          <Route exact path='/science' element={<News setProgress={setProgress} key='science' pageSize={pageSize} country='in' apiKey={apiKey} category='science'/>}></Route>
          <Route exact path='/sports' element={<News setProgress={setProgress} key='sports' pageSize={pageSize} country='in' apiKey={apiKey} category='sports'/>}></Route>
          <Route exact path='/health' element={<News setProgress={setProgress} key='health' pageSize={pageSize} country='in' apiKey={apiKey} category='health'/>}></Route>
          <Route exact path='/entertainment' element={<News setProgress={setProgress} key='entertainment' pageSize={pageSize} country='in' apiKey={apiKey} category='entertainment'/>}></Route>
          <Route exact path='/about' element={<About setProgress={setProgress} />} />
        </Routes>
      </Router>
    )
}

export default App