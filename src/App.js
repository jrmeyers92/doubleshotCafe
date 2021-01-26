import React from "react";
import { Route, HashRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import About from "./About/About";
import FoodMenu from "./FoodMenu/FoodMenu";
import Contact from "./Contact/Contact";
import Footer from "./Shared/Footer/Footer";

function App() {
	return (
		<div className='App'>
			<HashRouter basename='/'>
				<Route path='/' exact component={Home} />
				<Route path='/About' component={About} />
				<Route path='/FoodMenu' component={FoodMenu} />
				<Route path='/Contact' component={Contact} />
			</HashRouter>
			<Footer />
		</div>
	);
}

export default App;
