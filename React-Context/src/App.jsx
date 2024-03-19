import './App.css'
import MyPage from './components/MyPage'
import MyPageContext from './components/MyPageContext'

function App() {

  return (
    <div>
        <h1>React - Context API</h1>
        <hr />
        <MyPageContext />
        <hr />
        <MyPage />
    </div>
  )
}

export default App
