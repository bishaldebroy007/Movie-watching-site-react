
import './App.css'
import Favorites from './pages/Favourites';
import Home from "./pages/Home";

// import MovieCard from './components/moviesCard';
import {Routes, Route} from "react-router-dom";

function App() {

  return (
    <main className='main-content'>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} /> 
      </Routes>
    </main>
  );
}

// Time Frame: 52:37

export default App;
