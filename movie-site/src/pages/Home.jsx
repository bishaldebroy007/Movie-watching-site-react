import MovieCard from "../components/moviesCard"

function Home() {
    const movies = [
        {id: 1, title: "John Wick", release: "2020"},
        {id: 2, title: "Terminator", release: "1999"},
        {id: 3, title: "The Matrix", release: "1998"},
    ]

    const handleSearch = () => {

    }
    return (
        <div className='home'>
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for movies.." className= "search-input" />
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className='movies-grid'>
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} /> 
                ))}

            </div>
        </div>
    );
}

export default Home;