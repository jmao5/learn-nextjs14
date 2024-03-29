import { API_URL } from "@/constants/url";
import styles from "@/styles/movie-videos.module.css";

const getVideos = async (id: number) => {
  const res = await fetch(`${API_URL}/${id}/videos`);
  return res.json();
};

export default async function MovieVideos({ id }: { id: number }) {
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={video.name}
        />
      ))}
    </div>
  );
}
