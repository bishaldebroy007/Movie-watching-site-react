
import './App.css'
import Favorites from './pages/Favourites';

import Home from "./pages/Home";

// import MovieCard from './components/moviesCard';
import {Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";


function App() {

  return (
    <div>
      <NavBar />
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} /> 
      </Routes>
    </main>
    </div>
  );
}

// Time Frame: 52:37

export default App;
