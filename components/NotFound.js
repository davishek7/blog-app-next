import Link from "next/link";

export default function NotFound() {
  return (
    <div className="post-preview text-center">
      <div className="page-header mx-auto" data-text="404">
        404
      </div>
      <p className="lead subheading text-gray-800 mb-5">Page Not Found</p>
      <p className="text-gray-500 mb-0">
        It looks like you found a glitch in the matrix...
      </p>
      <Link to="/">&larr; Back to Homepage</Link>
    </div>
  );
}