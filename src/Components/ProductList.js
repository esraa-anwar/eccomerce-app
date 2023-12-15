import React, { useEffect, useState } from 'react'
import "./styles.scss"
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../Controller/action';
import axios from 'axios';

const ProductList = ({ item, addToCart }) => {
    const [products, setProducts] = useState([]);

    let navigate = useNavigate();
    const handleAddCart = (item) => {
        addToCart(item)
        navigate("/cart")
    }
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        fetchProducts();
    }, []);
    return (
        <div className='product-list-container'>
            {
                products && products.map((item, index) => {
                    return (
                        <div className='product-list' key={index}>
                            {item.status ? <div className='status'>{item.status}</div> : ""}
                            <img src={item.image} alt='img' />
                            <div className='card-content'>
                                <p className='name'>{item.title}</p>
                                <p className='price'>{item.price}</p>

                                <button onClick={() => handleAddCart(item)}> add</button></div>
                        </div>
                    )
                })
            }

        </div>
    )
}
const mapDispatchToProps = (dispatch) => ({
    addToCart: (item) => dispatch(addToCart(item)),
});

export default connect(null, mapDispatchToProps)(ProductList);
