"use client"
import Header from "@/components/Header";
import MDEditor from "@uiw/react-md-editor";

export default function PostContent({ post }) {
  const headerConfig = {
    title: post.title,
    slug: post.slug,
    subtitle: post.subtitle,
    content: post.content,
    image: "/assets/post-bg.jpg",
    headerType: "post-heading",
    subHeadingTag: "h2",
    author: post.author.username,
    created_at: post.created_at,
  };
  return (
    <>
      <Header {...headerConfig} />
      <article className="mb-4">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div
              className="col-md-10 col-lg-8 col-xl-7"
              style={{ whiteSpace: "pre-wrap" }}
            >
              <MDEditor.Markdown
                source={post.content}
                className="bg-white text-dark"
              />
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
