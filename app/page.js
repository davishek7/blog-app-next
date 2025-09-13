import { API_URL } from "@/constants/api.constant";
import Posts from "@/components/Posts";

export default async function Home() {
  const response = await fetch(`${API_URL}/blog`);
  const responseData = await response.json();
  const data = responseData.data;
  const initialPosts = data.posts;
  const nextOffset = data.offset + data.limit;
  const total = data.total;

  return (
    <Posts initialPosts={initialPosts} nextOffset={nextOffset} total={total} />
  );
}
