import React from 'react'
import aboutImg from '../img/aboutImg.png'
import '../styles/about.css'
import '../styles/header.css'

const AboutSection = () => {
	return (
		<div className='about-section'>
			<div className='container'>
				<div className='about-s'>
					<div className='about-img'>
						<img src={aboutImg} alt='' />
					</div>
					<div className='container'>
						<div className='about-inform'>
							<h2>
								Lorem ipsum dolor sit <br /> amet consectetur
							</h2>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
								libero facilis aliquid minus consequatur sunt repudiandae esse
								ducimus? Nostrum quasi ut delectu.
							</p>
							<button className=' btn1 btn2'>Learn More</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutSection
