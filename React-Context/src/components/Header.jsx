const Header = ({theme, handleTheme}) => {
	return (
		<header className={theme}>
			<h2>Mi aplicación sin Context API</h2>
			<h3>Mi cabecera</h3>
			<select name="language">
				<option value="Es">Español</option>
				<option value="En">Inglés</option>
			</select>
			<input type="radio" name="theme" id="light" onClick={handleTheme} value="light" />
			<label htmlFor="light">Claro</label>
			<input type="radio" name="theme" id="dark" onClick={handleTheme} value="dark" />
			<label htmlFor="dark">Oscuro</label>
			<button>Iniciar Sesión</button>
		</header>
	)
}

export default Header