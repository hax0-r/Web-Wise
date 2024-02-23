import './App.css'
import './Pages/Home/Home.scss'
import './Components/Navbar/Navbar.scss'
import './Components/Footer/Footer.scss'
import Navbar from './Components/Navbar/Navbar'
import Router from './Routers/Router'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
    <Navbar/>
    <Router/>
    <Footer/>
    </>
  )
}

export default App
