const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

const getMovie = async (id: number) => {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
};

const getVideos = async (id: number) => {
  const res = await fetch(`${API_URL}/${id}/videos`);
  return res.json();
};

const MovieDetail = async ({ params: { id } }: { params: { id: number } }) => {
  // const movie = await getMovie(id);
  // const videos = await getVideos(id);
  const [movie, videos] = await Promise.all([getMovie(id), getMovie(id)]);
  // console.log("movie : ", movie);
  console.log("videos : ", videos);

  return <h1>{movie.title}</h1>;
};

export default MovieDetail;
