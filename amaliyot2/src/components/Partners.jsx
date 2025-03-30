import React from 'react'
import airdnb from '../img/airdnb.png'
import facebook from '../img/facebook.png'
import google from '../img/google.png'
import microsoft from '../img/microsoft.png'
import spotify from '../img/spotify.png'
import '../styles/header.css'
import '../styles/partners.css'

const Partners = () => {
	return (
		<div className='partners-section'>
			<div className='container'>
				<div className='part-inform'>
					<h3>PARTNERS</h3>
					<h2>Lorem Ipsum Dolor </h2>
					<p>
						Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.{' '}
					</p>
				</div>
				<div className='social-m'>
					<img src={google} alt='' />
					<img src={microsoft} alt='' />
					<img src={airdnb} alt='' />
					<img src={facebook} alt='' />
					<img src={spotify} alt='' />
				</div>
			</div>
			<button className='btn1'>Learn More</button>
		</div>
	)
}

export default Partners
