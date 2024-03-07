import React from "react";

//include images into your bundle
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";

//create your first component
const Home = () => {
	return (
		<>
		<Navbar/>
		<Jumbotron />
		<Card />
		</>
	);
};

export default Home;
