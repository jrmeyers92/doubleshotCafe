import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import About from "./About/About";
import FoodMenu from "./FoodMenu/FoodMenu";
import Contact from "./Contact/Contact";
import Footer from "./Shared/Footer/Footer";
import { AnimatePresence, motion } from "framer-motion";

function App() {
	const location = useLocation();

	return (
		<div className='App'>
			<AnimatePresence>
				<Switch basename='/' location={location} key={location.key}>
					<Route path='/' exact>
						<Home />
					</Route>
					<Route path='/About'>
						<About />
					</Route>
					<Route path='/FoodMenu'>
						<FoodMenu />
					</Route>
					<Route path='/Contact'>
						<Contact />
					</Route>
				</Switch>
			</AnimatePresence>
			<Footer />
		</div>
	);
}

export default App;
