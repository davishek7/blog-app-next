import { notFound } from "next/navigation";
import { API_URL } from "@/constants/api.constant";
import PostContent from "@/components/PostContent";

export default async function PostDetail({ params }) {
  const { slug } = await params;
  const response = await fetch(`${API_URL}/blog/${slug}`);
  const responseData = await response.json();

  if (responseData.status !== 200){
    notFound()
  }
  const post = responseData.data;

  return <PostContent post={post} />;
}
