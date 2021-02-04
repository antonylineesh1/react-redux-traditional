import React from 'react'

export default function Home(props) {
    console.log('props', props);
    return (
        <div>
            <div className="cart">
                <h1>Cart :0</h1>
            </div>
            <div className="item">
                <img width="100px" height="80px" src='https://media.4rgos.it/s/Argos/8816155_R_SET?$Main768$&w=620&h=620' />
                <span>Samsung</span>
                <span>Price: 200$</span>
                <button onClick={() => props.addToCartHandler({ name: 'Samsung', price: 200 })}>Add To Cart</button>
            </div>
        </div>
    )
}
