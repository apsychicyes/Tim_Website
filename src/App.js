import React from 'react';
import logo from './logo.svg';
import './App.css';
import TrackContainer from './TrackContainer'

function TrackList() {
  let tracks = ['track one', 'track two', 'track three']
  let trackdivs = []
  tracks.forEach((track, index) => {
    trackdivs.push(
      <TrackContainer key={index} trackName={track}/>
      )
  })

  return trackdivs
}

function App() {
  let name = 'tim'
  let lastName = (firstName) => {
    let fullName = firstName + "Crombie"
    return fullName
  }
  console.log(lastName(name))

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            my name is {name}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <TrackList />

    </div>
  );
}

function Hello() {

  return <App />
}

export default App;
