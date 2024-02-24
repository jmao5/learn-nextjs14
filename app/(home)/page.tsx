import { API_URL } from "@/constants/url";
import Link from "next/link";

export const metadata = {
  title: "Home",
};

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
