import * as React from "react";
import "../styles/global.scss";
import Logo from "../components/logo";
import Nav from "../components/nav";
import Content from "../components/content";
import Footer from "../components/footer";

// markup
const ContactPage = () => {
  return (
    <main className="container">
      <Logo />
      <Nav />
      <Content>if u wanna make me less unemployed hmu @</Content>
      <Footer />
    </main>
  );
};

export default ContactPage;
