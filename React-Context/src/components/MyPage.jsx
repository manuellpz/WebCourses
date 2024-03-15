import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import {useState} from 'react'

const initialTheme = "light"

const MyPage = () => {
	const [theme, setTheme] = useState(initialTheme)

	const handleTheme = (e) => {
		setTheme(e.target.value)
	}

	return (
		<div className="my-page">
			<Header theme={theme} handleTheme={handleTheme}/>
			<Main theme={theme}/>
			<Footer theme={theme}/>
		</div>
	)
}

export default MyPage;