import Link from "next/link";
import styles from "@/styles/movie.module.css";

export default function Movie({ title, id, poster_path }) {
  return (
    <div key={id} className={styles.movie}>
      <img src={poster_path} alt={title} />
      <Link href={`movies/${id}`}>{title}</Link>
    </div>
  );
}
