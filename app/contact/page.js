"use client";
import { API_URL } from "@/constants/api.constant";
import { toast } from "react-toastify";
import Header from "@/components/Header";

function Contact() {
  const handleContactSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const postData = Object.fromEntries(formData.entries());

    const res = await fetch(`${API_URL}/contact/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    });

    const resData = await res.json();
    if (resData.status !== 201) {
      {
        toast.error(resData.message);
        return;
      }
    }
    toast.success(resData.message);
    e.target.reset();
  };

  const headerConfig = {
    title: "Contact Me",
    subtitle: "Have questions? I have answers.",
    image: "/assets/contact-bg.jpg",
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
              Want to get in touch? Fill out the form below to send me a message
              and I will get back to you as soon as possible!
            </p>
            <div className="my-5">
              <form onSubmit={handleContactSubmit}>
                <div className="form-floating">
                  <input
                    className="form-control"
                    id="full_name"
                    type="text"
                    name="full_name"
                    placeholder="Enter your name..."
                    required
                  />
                  <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating">
                  <input
                    className="form-control"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email..."
                    required
                  />
                  <label htmlFor="email">Email address</label>
                </div>
                <div className="form-floating">
                  <input
                    className="form-control"
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Enter your subject..."
                    required
                  />
                  <label htmlFor="subject">Subject</label>
                </div>
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    placeholder="Enter your message here..."
                    style={{ height: "12rem" }}
                    required
                  ></textarea>
                  <label htmlFor="message">Message</label>
                </div>
                <input type="hidden" name="from_app" value="blog app" />
                <br />
                <button
                  className="btn btn-primary text-uppercase"
                  id="submitButton"
                  type="submit"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
