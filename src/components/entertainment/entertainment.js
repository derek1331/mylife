import React from "react";
import "./entertainment.css"
  
class Entertainment extends React.Component {
    state = {
        title: '',
        released: '',
        runtime: '',
        actors: '',
        director: '',
        plot: '',
        ratings: ''
    }

    componentWillMount() {
        fetch('http://www.omdbapi.com/?i=tt3896198&apikey=447f330')
            .then(res => res.json())
            .then(res => console.log(JSON.stringify(res))
            )
    }

    addMedia = () => {
        const media = document.getElementById('entertainmentInput').value
        const getURL = `http://www.omdbapi.com/?t=${media}&apikey=447f330`
        // const title = document.getElementById('title')
        // const releassed = document.getElementById('released')
        // const runTime = document.getElementById('runTime')
        // const actors = document.getElementById('actors')
        // const director = document.getElementById('director')
        // const plot = document.getElementById('plot')
        // const ratings = document.getElementById('ratings')
        // const poster = document.getElementById('poster')
        fetch(getURL)
            .then(res => res.json())
            .then(res => {
                // const addTitle = res.Title
                // const addReleased = res.Released
                // const addRunTime = res.Runtime
                // const addActors = res.Actors
                // const addDirector = res.Director
                // const addPlot = res.Plot
                // const addRatings = res.Ratings
                // const addPoster = res.Poster
                // title.textContent = addTitle
                // console.log(addPoster)
            }
            )
    }

    render() {
        return (
        <div>
          <span className="temp">Movies/TV</span>
          <br></br>
          <input id="entertainmentInput" type="text"></input>
          <button className="entertainmentButton" onClick={this.addMedia}>Search</button>                
          <br></br>
          <span id='title'>Title: {this.state.title}</span>
          <br></br>
          <span id='released'>Released: {this.state.released}</span>
          <br></br>
          <span id='runTime'>Runtime:</span>
          <br></br>
          <span id='actors'>Actors:</span>
          <br></br>
          <span id='director'>Director:</span>
          <br></br>
          <span id='plot'>Plot:</span>
          <br></br>
          <span id='ratings'>Ratings:</span>
          <br></br>
          <img id='poster' src=""></img>
        </div>
        )
    }
}

export default Entertainment;