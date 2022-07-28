import React from 'react';
import Header from '@components/Header';
import ProductItem from '../components/ProductItem';

const Layout = ({ children }) => {
	return (
		<div className="Layout">
			<Header />
			{children}
		</div>
	);
}

export default Layout;
