import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import Script from "next/script";

export const metadata = {
  title: "My Blog - Avishek Das",
  description: "Avishek Das Blog App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Navbar />
          <main className="mb-4" style={{ flex: 1 }}>
            {children}
            <ToastContainer position="top-right" autoClose={3000} />
          </main>
          <Footer />
        </div>
        <Script
          src="https://kit.fontawesome.com/cc52db2e78.js"
          crossorigin="anonymous"
        ></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></Script>
      </body>
    </html>
  );
}
