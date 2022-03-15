import * as React from "react";
import "../styles/global.scss";
import Logo from "../components/logo";
import Nav from "../components/nav";
import Content from "../components/content";
import Footer from "../components/footer";
import ContactForm from "../components/contactForm";

// markup
const ContactPage = () => {
  return (
    <main className="container">
      <Logo />
      <Nav />
      <Content>
        <ContactForm />
      </Content>
      <Footer />
    </main>
  );
};

export default ContactPage;
