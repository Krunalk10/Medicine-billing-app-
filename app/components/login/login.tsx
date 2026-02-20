import React from "react";

const Login = () => {
	return (
		<div className="loginForm">
			<div className="flex flex-col gap-3">
				<h1 className="text-4xl flex justify-center">Login</h1>
				<input id="email" type="email" required />
				<input id="password" type="password" required />
			</div>
		</div>
	);
};

export default Login;
