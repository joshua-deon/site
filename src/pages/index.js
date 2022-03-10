import * as React from "react";
import "../styles/global.scss";
import Logo from "../components/logo";
import Nav from "../components/nav";
import Content from "../components/content";
import Footer from "../components/footer";

// markup
const IndexPage = () => {
  return (
    <main className="container">
      <Logo />
      <Nav />
      <Content>
        <h1>It’s Joshie baby.</h1>
        <h2>
          The difference between me and them is that these motherfuckers is not
          treating her correctly.
        </h2>
        <p>
          Sed posuere consectetur est at lobortis. Curabitur blandit tempus
          porttitor. Nulla vitae elit libero, a pharetra augue. Fusce dapibus,
          tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
          massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Aenean
          eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum.
        </p>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Integer posuere erat a ante venenatis
          dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <p>
          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Etiam
          porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus
          varius blandit sit amet non magna. Maecenas faucibus mollis interdum.
          Aenean lacinia bibendum nulla sed consectetur. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum
          nulla sed consectetur. Donec ullamcorper nulla non metus auctor
          fringilla. Nullam quis risus eget urna mollis ornare vel eu leo.
        </p>
      </Content>
      <Footer />
    </main>
  );
};

export default IndexPage;
