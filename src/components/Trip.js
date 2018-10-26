import React, { Component } from 'react';

class Trip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowDetail: false
        }
    }

    toggle = () => {
        this.setState({ isShowDetail : !this.state.isShowDetail })
    }
    
    render() {
        let { trip } = this.props
        return (
            <div className="col-md-4 my-3">
                <div className="card">
                    <img className="card-img-top" src={trip.carImage} alt="toyota" height="300px"/>
                    <div className="card-body">
                        <h4 className="card-title">{trip.from} đến {trip.to}</h4>
                        <p className="card-text">{trip.price} VND</p>
                        <button type="button" 
                            className="btn btn-primary"
                            onClick={this.toggle} >{this.state.isShowDetail ? "Ẩn" : "Hiện"}</button>
                    </div>

                    <div className={`detail my-3 ${this.state.isShowDetail ? "d-block" : "d-none"}`} >
                        <p>
                            <i className="fa fa-car"></i>
                            <span className="ml-2">{trip.car}</span>
                        </p>
                        <p>
                            <i className="fa fa-user-circle-o"></i>
                            <span className="ml-2">{trip.driver}</span>
                        </p>
                        <p>
                            <i className="fa fa-calendar"></i>
                            <span className="ml-2">{trip.time}</span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Trip;