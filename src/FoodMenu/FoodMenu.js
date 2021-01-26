import React from "react";
import "./FoodMenu.css";
import Header from "../Shared/Header/Header";
import Menu from "../Shared/Menu/Menu";
import SectionHeader from "../Shared/SectionHeader/SectionHeader";
import SubHeader from "../Shared/SubHeader/SubHeader";
import { motion } from "framer-motion";

const FoodMenu = () => {
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
			className='foodMenu container'
			variants={containerVariants}
			initial='hidden'
			animate='visible'
			exit='exit'>
			<Header />
			<div className='foodMenu__container'>
				<div className='foodMenu__left'>
					<img
						src='https://doubleshot.cafe/wp-content/themes/doubleshot/graphics/pancakes.png'
						className='foodMenu__img'></img>
				</div>
				<div className='foodMenu__right'>
					<SectionHeader title='The Menu' />
					<div className='about__blurb'>
						<SubHeader title='Breakfast' />
						<p className='about__blurb-para'>
							Breakfast is not just meal. It is the wondrous time of day when
							impossible things seems possible - the signal that the day has
							just begun and good things are yet to come. Doubleshot’s menu has
							been designed with the magic of breakfast time in mind and a good
							dose of nutritious flavour, catering for vegetarian, paleo,
							lactose-free and gluten-free diets. Give your insides a hug with
							one of Doubleshot’s healthy morning meals or a refreshing vegan
							smoothie.
						</p>
					</div>

					<div className='about__blurb'>
						<SubHeader title='Lunch' />
						<p className='about__blurb-para'>
							Lunch is the daily checkpoint where you can sit and recharge,
							encouraging your body and your mind to keep going and reach the
							next great thing in your day. Whether you’re after a hearty,
							protein-filled meal or something light and fresh, Doubleshot’s
							energising lunch options will slay your hunger - the only danger
							is that few things will seem as great as that plate of goodness
							you were served for lunch.
						</p>
					</div>
					<button className='foodMenu__button'>Download Menu</button>
				</div>
			</div>

			<Menu />
		</motion.div>
	);
};

export default FoodMenu;
