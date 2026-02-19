import React from "react";
import Login from "./components/login/login";

const Homepage = () => {
	return (
		<div className="h-screen flex">
			<div className="flex-1 bg-lime-300">
				<Login />
			</div>
		</div>
	);
};

export default Homepage;
