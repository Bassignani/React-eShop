import { useState } from "react";

const initialState = {
    cart: [], 
}

const useInitialSatate = () => {
 
    const [state, setState] = useState(initialState);

	const [toggleOrders, setToggle] = useState(false);

	const setToggleOrders = () => {
		setToggle(!toggleOrders);
	}

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    };

	const removeFromCart = (payload) => {
		setState({
			...state,
			cart: state.cart.filter(items => items.id !== payload.id),
		});
	}

	return {
		state,
		addToCart,
		removeFromCart,
		toggleOrders,
		setToggleOrders
	}
}

export default useInitialSatate;