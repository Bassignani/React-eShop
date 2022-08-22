import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg';
import AppContext from '@context/AppContext';


const ProductItem = ({ product }) => {

	const { addToCart, removeFromCart, state } = useContext(AppContext);

	const handleClick = item => {
		productAdded() ? removeFromCart(item) : addToCart(item);
		setAdded(!added)
 	}

	 const productAdded = () => state.cart.some( (item) => item.id === product.id) ? true : false;

	return (
		
		<div className="ProductItem">
			<img src={ product.images[0] } alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={ () => handleClick(product) } >
					{ productAdded() ? <img className='cart-image' src={ addedToCartImage } alt="Added to cart" /> : <img className='cart-image' src={ addToCartImage } alt="Add to cart" /> }
				</figure>
			
			</div>
		</div>
	);
}

export default ProductItem;
