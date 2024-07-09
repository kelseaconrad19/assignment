import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import UserProfile from "./UserProfile.jsx";
import MoviesList from "./MoviesList.jsx";

function App() {
	return (
		<div className="App">
			<UserProfile />
			<MoviesList />
		</div>
	);
}

export default App;
