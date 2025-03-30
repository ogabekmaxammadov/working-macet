import React from 'react'
import { IoMenu } from 'react-icons/io5'
import logo from '../img/Frame 4.png'
import groupImg from '../img/Group.png'
import '../styles/header.css'

const Header = () => {
	return (
		<div className='header-section'>
			<div className='container'>
				<header className='header'>
					<div className='logo'>
						<img src={logo} alt='' />
					</div>
					<IoMenu className='menuIcon' />
					<nav className='nav'>
						<ul>
							<li>
								<a href=''>Home</a>
							</li>
							<li>
								<a href=''>Portfolio</a>
							</li>
							<li>
								<a href=''>Services</a>
							</li>
							<li>
								<a href=''>Contact</a>
							</li>
						</ul>
					</nav>
				</header>
				<div className='header-information'>
					<div className='inform'>
						<h2>WELCOME</h2>
						<h1>Lorem ipsum, dolor sit amet consectetur </h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
							sapiente molestiae, dolor possimus debitis labore id laborum
							architecto reprehenderit quidem, vero tempore quasi consectetur.
						</p>
						<button className='btn'>Explore</button>
					</div>
					<div className='img'>
						<img src={groupImg} alt='' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
