"use client";
import { useState } from "react";
import { API_URL } from "@/constants/api.constant";
import InfiniteScroll from "react-infinite-scroll-component";
import Post from "./Post";
import Header from "./Header";

export default function Posts({initialPosts, nextOffset, total}) {
  const [posts, setPosts] = useState(initialPosts);
  const [offset, setOffset] = useState(nextOffset);

  const fetchMorePosts = async () => {
    const res = await fetch(`${API_URL}/blog?limit=5&offset=${offset}`);
    const responseData = await res.json();
    const data = responseData.data;
    setPosts((prev) => [...prev, ...data.posts]);
    setOffset(offset + data.limit);
  };

  const headerConfig = {
    title: "Welcome Home",
    subtitle: "This is the homepage.",
    image: "/assets/home-bg.jpg",
    headerType: "site-heading",
    subHeadingTag: "h2",
  };

  return (
    <>
      <Header {...headerConfig} />
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            {posts.length == 0 ? (
              <p style={{ textAlign: "center" }}>No posts found!</p>
            ) : (
              <InfiniteScroll
                dataLength={posts.length}
                next={fetchMorePosts}
                hasMore={posts.length < total}
                loader={<h4>Loading...</h4>}
                endMessage={
                  <p style={{ textAlign: "center" }}>
                    You&apos;ve seen it all!
                  </p>
                }
              >
                {posts.map((post) => (
                  <Post
                    key={post.id}
                    title={post.title}
                    slug={post.slug}
                    subtitle={post.subtitle}
                    author={post.author.username}
                    created_at={post.created_at}
                  />
                ))}
              </InfiniteScroll>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
