import React from "react";

//include images into your bundle
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";
import Carrucel from "./Carrucel.jsx";

//create your first component
const Home = () => {
	return (
		<>
		<Navbar/>
		<Jumbotron />
		{/* <Card /> */}
		<Carrucel/>
		<Footer/>
		</>
	);
};

export default Home;
