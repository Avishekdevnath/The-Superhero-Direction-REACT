import React from 'react';
import './Speaker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'


// Code for Speaker section
const Speaker = (props) => {

    // fontawesome icon
    const element = <FontAwesomeIcon icon={faCartPlus} />


    // Destructuring details of speaker
    const { image, name, type, age, country, fee } = props.speaker;
    return (
        <div className="col">

            {/* Card for showing speaker details */}

            <div className="card card-1 py-3">
                <img src={image} className="card-img-top img-fluid image rounded-circle mx-auto img-thumbnail" alt={name}
                    style={{ height: "150px", width: "150px" }} />
                <div className="card-body">
                    <h5 className="card-title fw-bold">{name}</h5>
                    <table className="table text-start">
                        <tbody>
                            <tr>
                                <th>Type</th>
                                <th>:</th>
                                <th>{type}</th>
                            </tr>
                            <tr>
                                <th>Age</th>
                                <th>:</th>
                                <th>{age}</th>
                            </tr>
                            <tr>
                                <th>Country</th>
                                <th>:</th>
                                <th>{country}</th>
                            </tr>
                            <tr>
                                <th>Fee</th>
                                <th>:</th>
                                <th>${fee}</th>
                            </tr>
                        </tbody>
                    </table>
                    <button className="btn btn-success" onClick={() => props.handleAddToCart(props.speaker)}>{element} Add To Cart</button>
                </div>
            </div>
        </div>



    );
};

export default Speaker;