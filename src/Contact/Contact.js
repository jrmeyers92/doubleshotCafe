import React from "react";
import "./Contact.css";
import Header from "../Shared/Header/Header";
import Menu from "../Shared/Menu/Menu";
import Footer from "../Shared/Footer/Footer";
import SubHeader from "../Shared/SubHeader/SubHeader";

const Contact = () => {
	return (
		<div className='contact'>
			<Header />
			<div className='contact__container'>
				<div className='contact__left'>
					<div className='contact__left-left'>
						<div className='contact__card'>
							<SubHeader title='Find Us' />
							<p className='contact__para'>Shop 7, Deakin Court</p>
							<p className='contact__para'>Deakin, ACT 2600</p>
							<p className='contact__para'>
								<a className='contact__link' href='#' target='_blank'>
									View Google Maps
								</a>{" "}
							</p>
						</div>
						<div className='contact__card'>
							<SubHeader title='Get in Touch' />
							<p className='contact__para'>Phone: 303-842-9931</p>
						</div>
						<div className='contact__social'>
							<i class='fab fa-instagram'></i>
							<i class='fab fa-facebook-square'></i>
						</div>
					</div>
					<div className='contact__left-right'>
						<div className='contact__card'>
							<SubHeader title='reservations' />
							<p className='contact__para'>Reservations by phone.</p>
							<p className='contact__para'>303-842-9931</p>
						</div>
						<div className='contact__card'>
							<SubHeader title='Opening Hours' />
							<p className='contact__para'>
								<em>Weekdays</em> 6:30am - 5:00pm
							</p>
							<p className='contact__para'>
								<em>Weekends</em> 7:00am - 4:00pm
							</p>
						</div>
					</div>
				</div>
				<div className='contact__right'>
					<div className='contact__circle'></div>
					<img
						className='contact__image'
						src='https://doubleshot.cafe/wp-content/themes/doubleshot/graphics/map-open.png'></img>
				</div>
			</div>
			<Menu />
		</div>
	);
};

export default Contact;
