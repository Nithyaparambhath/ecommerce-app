
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Collection from './Components/Collection'
import About from './Components/About'
import Contact from './Components/Contact'
import Cart from './Components/Cart'

function App() {

  return (
    <>
     <Navbar />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/collection' element={<Collection />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/cart' element={<Cart />} />

     </Routes>
    </>
  )
}

export default App
