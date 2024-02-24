import { API_URL } from "@/constants/url";

const getVideos = async (id: number) => {
  const res = await fetch(`${API_URL}/${id}/videos`);
  return res.json();
};

export default async function MovieVideos({ id }: { id: number }) {
  const video = await getVideos(id);
  return <h6>{JSON.stringify(video)}</h6>;
}
