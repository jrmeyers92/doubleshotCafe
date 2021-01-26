import React from "react";
import "./About.css";
import Header from "../Shared/Header/Header";
import Menu from "../Shared/Menu/Menu";
import SectionHeader from "../Shared/SectionHeader/SectionHeader";
import SubHeader from "../Shared/SubHeader/SubHeader";
import { motion } from "framer-motion";

const About = () => {
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
			className='about container'
			variants={containerVariants}
			initial='hidden'
			animate='visible'
			exit='exit'>
			<Header />
			<div className='about__content'>
				<div className='column'>
					<SectionHeader title='The Cafe' />
					<div className='about__blurb'>
						<SubHeader title='The Life' />
						<p className='about__blurb-para'>
							Nestled neatly in the local Deakin shops is a social hub,
							pulsating vibrancy and life. Friendly and fun, Doubleshot indulges
							Canberra’s inner south with it’s quirky interiors and love-filled
							menu, serving breakfast through to lunch. Doubleshot is your
							perfect hangout for a carefree coffee catch-up, a date with your
							fellow breakfast lover or a social afternoon running into friends.
						</p>
					</div>

					<div className='about__blurb'>
						<SubHeader title='The Food' />
						<p className='about__blurb-para'>
							Using fresh produce, innovative thinking and a customer-oriented
							approach, you’ll feel right at home as you sit and sip on their
							famous peanut butter smoothie. Become a part of the relaxed buzz
							that is the Doubleshot culture – atmospheric, creative and homely
							every day.
						</p>
					</div>
				</div>

				<div className='column'>
					<SectionHeader title='The Story' />
					<div className='about__blurb'>
						<SubHeader title='The Atmosphere' />
						<p className='about__blurb-para'>
							Complete with a hip, creative homely atmosphere, its your local
							fix of fresh produce, innovative tailor-made menus and
							customer-orientated service. Let one of our finely roasted coffees
							grace your lips before the days dance begins. With large indoor
							and out door designer dining areas, Doubleshot lets you snuggle in
							or freshen up under the suns warmth, depending on your mood.
						</p>
					</div>

					<div className='about__blurb'>
						<SubHeader title='And So it Began...' />
						<p className='about__blurb-para lastPara'>
							The words ‘I wake up wanting to kiss you’ are scrawled across the
							wall, reminding us of that first cup of coffee, kissing our lips
							in the morning and inviting us to have a good day. The Doubleshot
							story continues to unfold with innovative ideas, changing menus
							and people writing their own stories between the walls as they
							indulge in daily delights.
						</p>
					</div>
				</div>
			</div>

			<Menu />
		</motion.div>
	);
};

export default About;
