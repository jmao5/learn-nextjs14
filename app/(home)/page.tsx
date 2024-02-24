import Movie from "@/components/movie";
import { API_URL } from "@/constants/url";
import styles from "@/styles/home.module.css";
import { Suspense } from "react";

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
    <div className={styles.container}>
      <Suspense fallback={<h1>...Loading Movie info</h1>}>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            title={movie.title}
            id={movie.id}
            poster_path={movie.poster_path}
          />
        ))}
      </Suspense>
    </div>
  );
};

export default HomePage;
