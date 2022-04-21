import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
// ADDED: component imports
import Header from './Components/Header'
import Home from './Components/Home'
import Books from './Components/Books'
import Blog from './Components/Blog'
import Contact from './Components/Contact'
import Login from './Components/Contact'
import Basket from './Components/Basket'
import Book from './Components/Book'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books' element={<Books />}/>
          <Route path='/books/:id' element={<Book />} />
          <Route path='/blog' element={<Blog />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/basket' element={<Basket />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
