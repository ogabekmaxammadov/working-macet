import React from 'react'
import blogImg from '../img/blogImage.png'
import '../styles/blog.css'
import '../styles/header.css'

const BlogSection = () => {
	return (
		<div className='blog-section'>
			<div className='container'>
				<div className='blog-s'>
					<div className='container'>
						<div className='blog-inform'>
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
					<div className='blog-img'>
						<img src={blogImg} alt='' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default BlogSection
