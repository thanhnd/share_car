import React, { Component } from 'react';
import './App.css';

import trips from './data/data'

import Carousel from './components/Carrousel'
import Triplist from './components/TripList'

class App extends Component {
    
    render() {
        console.log(trips)
        return (
            <div className="App">
                <Carousel />
                <Triplist trips={trips}/>

            </div>
        );
    }
}

export default App;
