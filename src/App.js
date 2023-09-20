import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import About from './components/About'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default class App extends Component {
  pageSize = 6;
  render() {
    return (
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<News key='general' pageSize={this.pageSize} country='in' apiKey='c5ea547c0beb4519aa1ab749b0b57ae2' category='general'/>}></Route>
          <Route exact path='/general' element={<News key='general' pageSize={this.pageSize} country='in' apiKey='c5ea547c0beb4519aa1ab749b0b57ae2' category='general'/>}></Route>
          <Route exact path='/business' element={<News key='business' pageSize={this.pageSize} country='in' apiKey='c5ea547c0beb4519aa1ab749b0b57ae2' category='business'/>}></Route>
          <Route exact path='/technology' element={<News key='technology' pageSize={this.pageSize} country='in' apiKey='c5ea547c0beb4519aa1ab749b0b57ae2' category='technology'/>}></Route>
          <Route exact path='/science' element={<News key='science' pageSize={this.pageSize} country='in' apiKey='c5ea547c0beb4519aa1ab749b0b57ae2' category='science'/>}></Route>
          <Route exact path='/sports' element={<News key='sports' pageSize={this.pageSize} country='in' apiKey='c5ea547c0beb4519aa1ab749b0b57ae2' category='sports'/>}></Route>
          <Route exact path='/health' element={<News key='health' pageSize={this.pageSize} country='in' apiKey='c5ea547c0beb4519aa1ab749b0b57ae2' category='health'/>}></Route>
          <Route exact path='/entertainment' element={<News key='entertainment' pageSize={this.pageSize} country='in' apiKey='c5ea547c0beb4519aa1ab749b0b57ae2' category='entertainment'/>}></Route>
          <Route exact path='/about' element={<About/>} />
        </Routes>
      </Router>
    )
  }
}