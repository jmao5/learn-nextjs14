"use client";

import Link from "next/link";
import styles from "@/styles/movie.module.css";
import { useRouter } from "next/navigation";

export default function Movie({ title, id, poster_path }) {
  const router = useRouter();
  const linkHandler = () => {
    router.push(`movies/${id}`);
  };
  return (
    <div key={id} className={styles.movie}>
      <img src={poster_path} alt={title} onClick={linkHandler} />
      <Link prefetch href={`movies/${id}`}>
        {title}
      </Link>
    </div>
  );
}
