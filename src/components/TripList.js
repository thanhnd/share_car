import React, { Component } from 'react';
import Trip from './Trip'

class TripList extends Component {
    render() {
        let  {trips} = this.props
        console.log(trips)
        
        return (
            <div className="py-5">
                <h1>Danh sách các chuyến đi</h1>

                <div className="container">
                    <div className="row">
                        {
                            trips.map((trip, index) => {
                                return <Trip
                                    trip={trip}
                                    key={index} />
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default TripList;