import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";

export default function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Form />
      </div>
      <Footer />
    </>
  );
}
