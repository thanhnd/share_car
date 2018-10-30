import React from 'react';

const TripModal = (props) => {
    return (

        <div className="modal fade" id="modelId" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">

                        <h4 className="modal-title" id="modelTitleId">Modal title</h4>
                    </div>
                    <div>
                        <table className="table">
                            
                            <tbody>
                                <tr>
                                    <td>Nơi xuất phát</td>
                                    <td>{props.trip.from}</td>
                                </tr>
                                <tr>
                                    <td>Nơi đến</td>
                                    <td>{props.trip.from}</td>
                                </tr>
                                <tr>
                                    <td>Tài xế</td>
                                    <td>{props.trip.driver}</td>
                                </tr>
                                <tr>
                                    <td>Giá</td>
                                    <td>{props.trip.price}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TripModal;