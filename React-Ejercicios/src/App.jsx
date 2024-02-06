import CrudApi from "./components/CrudApi"
import CrudApp from "./components/CrudApp"
import SelectsAnidados from "./components/SelectsAnidados"
import SongSearch from "./components/SongSearch"
import ContactForm from "./components/ContactForm"

function App() {

  return (
    <>
      <h1>EJERCICIOS REACT</h1>
      <hr />
      <ContactForm />
      <hr />
      <SelectsAnidados />
      <hr />
      <SongSearch />
      <hr />
      <CrudApi />
      <hr />
      <CrudApp />
      <hr />
    </>
  )
}

export default App
