import React, { Component } from 'react'
import '../css/app.css'
import Main from './main.jsx'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Welcome to your Github Dash</h1>
        </header>
        <div className='App-intro'>
          <Main />
        </div>
      </div>
    )
  }
}

export default App
