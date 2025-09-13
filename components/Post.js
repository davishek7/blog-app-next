"use client"
import Link from "next/link";

export default function Post({ title, slug, subtitle, author, created_at }) {

  return (
    <>
      <div className="post-preview">
        <Link href={`/posts/${slug}`}>
          <h2 className="post-title">{title}</h2>
          <h3 className="post-subtitle">{subtitle}</h3>
        </Link>
        <p className="post-meta">
          Posted by &nbsp;
          <a href="#!">{author}</a>
          &nbsp; on {created_at}
        </p>
      </div>
      <hr className="my-4" />
    </>
  );
}