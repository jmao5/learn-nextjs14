import { API_URL } from "@/constants/url";

const getMovie = async (id: number) => {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
};

export default async function MovieInfo({ id }: { id: number }) {
  const movie = await getMovie(id);
  return <h6>{JSON.stringify(movie)}</h6>;
}
