import React from 'react';
import './cart.css'

const Cart = (props) => {
    console.log(props.cart);
    const { cart } = props;

    let total = 0;
    for (const speaker of cart) {
        total = total + speaker.fee;
    }

    return (
        <div className="cart py-3 position-fixed " >
            <h5>Speakers Added : {props.cart.length}</h5>
            <h5>Total Cost : ${total}</h5>
            <h4 className="p-3">Speakers name : </h4>
            <ol className="ol">
                {
                    props.cart.map(speaker => <li key={speaker.id} className="li">
                        <div><img src={speaker.image} className="img-fluid image" alt="" /></div>
                        <div className="text">{speaker.name}</div>
                    </li>)
                }
            </ol>
        </div>
    );
};

export default Cart;