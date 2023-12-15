import React from 'react'
import { connect } from 'react-redux';
import { removeFromCart } from '../Controller/action';
import "./styles.scss"
const Cart = ({ cartItems, removeFromCart }) => {
    return (
        <div className='cart-container'>
            <h2>Shopping Cart</h2>

            <ul>
                {cartItems.map((item, index) => (<>
                    <li key={index} className='cart'>
                        <div className='cart-content'>
                            <img src={item.image} />

                            <p>{item.title}</p>

                            <p>{item.price}</p></div>
                        <div>                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </div>
                    </li>
                </>
                ))}
            </ul>

        </div >
    )
}

const mapStateToProps = (state) => ({
    cartItems: state.cart.cartItems,
});
const mapDispatchToProps = (dispatch) => ({
    removeFromCart: (itemId) => dispatch(removeFromCart(itemId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
