
import './App.css'
import MovieCard from './components/moviesCard';

function App() {

  return (
    <>
      {/* <div>
        <p>Hello</p>
      </div>
      <Text display="How're you?" />
      <Text display="I hope fine." /> */}
      <MovieCard movie={{title: "Tim's Film", release: "2024"}} />
    </>
  );
}

// making a component = learning
// function Text({ display }) {
//   return (
//     <p>{display}</p>
//   );
// }

export default App
