import React from 'react'
import {
	FaFacebookF,
	FaInstagram,
	FaTiktok,
	FaTwitter,
	FaYoutube,
} from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa6'
import '../styles/footer.css'

const FooterSection = () => {
	return (
		<div className='footer'>
			<div className='social-med'>
				<FaFacebookF className='icon-f' />
				<FaInstagram className='icon-f' />
				<FaTwitter className='icon-f' />
				<FaTiktok className='icon-f' />
				<FaWhatsapp className='icon-f' />
				<FaYoutube className='icon-f' />
			</div>
			<div className='author'>Made with 2025 || Ogabek Maxammadov</div>
		</div>
	)
}

export default FooterSection
