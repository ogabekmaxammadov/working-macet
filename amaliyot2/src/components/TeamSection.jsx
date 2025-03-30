import React from 'react'
import odam1 from '../img/odam1.png'
import odam2 from '../img/odam2.png'
import odam3 from '../img/odam3.png'
import odam4 from '../img/odam4.png'
import '../styles/header.css'
import '../styles/team.css'

const TeamSection = () => {
	return (
		<div className='team-section'>
			<div className='container'>
				<div className='team-inform'>
					<h2>TEAM</h2>
					<h1>Our Talents</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit Lorem
					</p>
				</div>
				<div className='team-imgs'>
					<img src={odam1} alt='' />
					<img src={odam2} alt='' />
					<img src={odam3} alt='' />
					<img src={odam4} alt='' />
				</div>
				<button className='btn1 btn2 btn3'>View Team</button>
			</div>
		</div>
	)
}

export default TeamSection
