import React from "react";
import Header from "@/components/Header";

function About() {
  const headerConfig = {
    title: "About Me",
    subtitle: "This is what I do.",
    image: "/assets/about-bg.jpg",
    headerType: "page-heading",
    subHeadingTag: "span",
  };
  return (
    <>
      <Header {...headerConfig} />
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <p>
              Enthusiastic and dedicated Backend Developer with hands-on
              experience in Python-based frameworks like Django, Flask, FastAPI,
              and Django REST Framework. Skilled in designing and building
              RESTful APIs and scalable server-side logic.
            </p>

            <p>
              Currently expanding expertise by learning PHP and Laravel, while
              also exploring the JavaScript ecosystem. Experienced with React
              for building interactive UIs and Next.js for delivering optimized,
              full-stack web applications.
            </p>

            <p>
              Passionate about creating reliable, efficient, and modern
              applications that bridge strong backend systems with seamless
              frontend experiences.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
