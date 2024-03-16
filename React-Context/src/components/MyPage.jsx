import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { useState } from 'react'

const initialTheme = "light"
const initialLanguage = "es"

const translations = {
    es: {
        headerTitle: "Mi aplicacion SIN Context API",
        headerSubtitle: "Mi Cabecera",
        headerLight: "Claro",
        headerDark: "Oscuro",
        buttonLogin: "Iniciar Sesion",
        buttonLogout: "Cerrar Sesion",
        mainWelcome: "Bienvenido Invitado",
        mainHello: "Hola usuario",
        mainContent: "Mi contenido principal",
        footerTitle: "Mi pie de pagina"
    },
    en: {
        headerTitle: "My application WITHOUT Context API",
        headerSubtitle: "My Header",
        headerLight: "Light",
        headerDark: "Dark",
        buttonLogin: "Login",
        buttonLogout: "Logout",
        mainWelcome: "Welcome Guest",
        mainHello: "Hello user",
        mainContent: "My main content",
        footerTitle: "My footer"
    }
}

const MyPage = () => {
    const [theme, setTheme] = useState(initialTheme)
    const [language, setLanguage] = useState(initialLanguage)
    const [texts, setTexts] = useState(translations[language])

    const handleTheme = (e) => {
        setTheme(e.target.value)
    }
    const handleLanguage = e => {
    	setLanguage(e.target.value)
    	e.target.value === 'es' ? setTexts(translations.es) : setTexts(translations.en)
    }

    return (
        <div className="my-page">
			<Header theme={theme} handleTheme={handleTheme} texts={texts} handleLanguage={handleLanguage}/>
			<Main theme={theme} texts={texts}/> 
			<Footer theme={theme} texts={texts}/>
		</div>
    )
}

export default MyPage;