import React from "react";

const Login = () => {
	return (
		<div className="loginForm">
			<div className="flex flex-col gap-3">
				<h1 className="text-4xl font-bold text-green-900 flex justify-center">
					Login To Shree
				</h1>
				<input id="email" type="email" placeholder="Email address" required />
				<input id="password" type="password" placeholder="Password" required />
				<button>Login</button>
				<h4>Forgot password?</h4>
				<br />
				<button>Continue with google</button>
				<button>Create new account</button>
			</div>
		</div>
	);
};

export default Login;
