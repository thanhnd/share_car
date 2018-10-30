import React, { Component } from 'react';
import './App.css';

import trips from './data/data'
import Carousel from './components/Carrousel'
import Triplist from './components/TripList'
import TripModal from './components/TripModal'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            trip: {}
        }
    }
    
    getTrip = (trip) => {
        console.log(trip)
        this.setState({trip})
    }

    render() {
        return (
            <div className="App">
                <Carousel />
                <Triplist trips={trips} getTrip={this.getTrip}/>
                <TripModal trip={this.state.trip}/>
            </div>
        );
    }
}

export default App;
