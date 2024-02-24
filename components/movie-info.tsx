import { API_URL } from "@/constants/url";
import styles from "@/styles/movie-info.module.css";

const getMovie = async (id: number) => {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
};

export default async function MovieInfo({ id }: { id: number }) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img
        src={movie.poster_path}
        alt={movie.title}
        className={styles.poster}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐{movie.vote_average}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
