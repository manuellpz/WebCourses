import './App.css'
import Contador from './component/Contador';
import ContadorMejorado from './component/ContadorMejorado'


function App() {
    
    return (
        <div>
          <h1>UseReducer</h1>
          <hr />
          <Contador />
          <hr />
          <ContadorMejorado />
        </div>
    )
}

export default App