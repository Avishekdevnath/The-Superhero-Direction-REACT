import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Speaker from '../Speaker/Speaker';
import './Main.css';


// Code for Main section
const Main = () => {

    // Loading data
    const [speakers, setSpeakers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./speakers.json')
            .then(res => res.json())
            .then(data => setSpeakers(data))
    }, [])


    // Function for adding speakers to cart
    const handleAddToCart = (speaker) => {

        const oldSpeakers = cart.filter(oldSpeaker => oldSpeaker.id !== speaker.id)

        const newCart = [...oldSpeakers, speaker];
        setCart(newCart);
    }

    return (
        <div>
            {/* HTML element for Main section including speaker section and cart section*/}
            <div className="container main">
                <div className="speakers-container">
                    <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                        {
                            speakers.map(speaker => <Speaker
                                key={speaker.id}
                                speaker={speaker}
                                handleAddToCart={handleAddToCart}
                            ></Speaker>)
                        }
                    </div>
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>




        </div>
    );
};

export default Main;