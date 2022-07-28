import React, { useRef } from 'react';
import '@styles/Login.scss';
import logo from '@logos/logo_yard_sale.svg';


const Login = () => {

	const form = useRef(null);
	const handleSubmit = (event) => {
		event.preventDefault();   //Evita el reload de la pagina y que los parametros se envien por la URL al oprimir el boton de Login
		const formData = new FormData(form.current);
		const data ={
			username: formData.get('email'),
			password: formData.get('password')
		};
		console.log(data);
	}

	return (
		<div className="Login">
			<div className="Login-container">
				<img src={logo} alt="logo" className="logo" />
				<form action="/" className="form" ref={ form }>
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" name="email" placeholder="platzi@example.cm" className="input input-email" />
					<label htmlFor="password" className="label">Password</label>
					<input type="password" name="password" placeholder="*********" className="input input-password" />
					<button type='submit' className="primary-button login-button" onClick={handleSubmit}> 
						Login
					</button>
					<a href="/">Forgot my password</a>
				</form>
				<button className="secondary-button signup-button" >
					Sign up
				</button>
			</div>
		</div>
	);
}

export default Login;
