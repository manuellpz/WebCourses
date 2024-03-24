import './App.css'
import Contador from './component/Contador';
import ContadorMejorado from './component/ContadorMejorado'
import ShoppingCart from './component/ShoppingCart'


function App() {
    
    return (
        <div>
          <h1>UseReducer</h1>
          <hr />
          <ShoppingCart />
          <hr />
          <Contador />
          <hr />
          <ContadorMejorado />          
        </div>
    )
}

export default App