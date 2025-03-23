import './css/App.css'
import { MovieProvider } from './contexts/MovieContext'
import Favorite from './pages/Favorites'
// import {MovieCard} from "./components/MovieCard"
import Home from './pages/Home'
import {Routes,Route} from 'react-router-dom'
import NavBar from './components/NavBar'

function App(){
  return (
    <MovieProvider>
      <NavBar/>
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favorites' element={<Favorite/>}/>
      </Routes>
    </main>
    </MovieProvider>
  )
}

export default App;
