import * as React from "react";
import "../styles/global.scss";
import Logo from "../components/logo";
import Nav from "../components/nav";
import Content from "../components/content";
import Footer from "../components/footer";

// markup
const WorkPage = () => {
  return (
    <main className="container">
      <Logo />
      <Nav />
      <Content>im unemployed lol</Content>
      <Footer />
    </main>
  );
};

export default WorkPage;
