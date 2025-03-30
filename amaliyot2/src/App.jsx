import './App.css'
import AboutSection from './components/AboutSection'
import BlogSection from './components/BlogSection'
import FooterSection from './components/FooterSection'
import Header from './components/header'
import Partners from './components/Partners'
import TeamSection from './components/TeamSection'

function App() {
	return (
		<>
			<Header />
			<Partners />
			<AboutSection />
			<BlogSection />
			<TeamSection />
			<FooterSection />
		</>
	)
}

export default App
