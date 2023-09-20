import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
      <NavBar/>
      <News pageSize={5} country='in' apiKey='c5ea547c0beb4519aa1ab749b0b57ae2' category='technology'/>
      </div>
    )
  }
}