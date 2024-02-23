import Link from "next/link";

export const metadata = {
  title: "Home",
};

// const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
export const API_URL = `${process.env.BaseUrl}/movies`;

const getMovies = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

const HomePage = async () => {
  const movies: Movie[] = await getMovies();

  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
};

export default HomePage;
