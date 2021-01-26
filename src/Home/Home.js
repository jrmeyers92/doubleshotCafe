import React from "react";
import "./Home.css";
import Header from "../Shared/Header/Header";
import Menu from "../Shared/Menu/Menu";
import { motion } from "framer-motion";

const Home = () => {
	const containerVariants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: { dealy: 1.5, duration: 1.5 },
		},
		exit: {
			x: "-100vw",
			transition: { ease: "easeInOut" },
		},
	};
	return (
		<motion.div
			className='home container'
			variants={containerVariants}
			initial='hidden'
			animate='visible'
			exit='exit'>
			<Header />
			<div className='home__pictures'>
				<img
					className='home__image bloodyMary'
					src='https://doubleshot.cafe/wp-content/themes/doubleshot/graphics/home-tiles/bloody_mary.png'></img>
				<img
					className='home__image coffee'
					src='https://doubleshot.cafe/wp-content/themes/doubleshot/graphics/home-tiles/coffee.png'></img>
			</div>
			<Menu />
		</motion.div>
	);
};

export default Home;
