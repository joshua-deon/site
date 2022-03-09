import * as React from "react"
import "../styles/global.scss"
import Logo from "../components/logo"
import Nav from "../components/nav"
import Content from "../components/content"
import Footer from "../components/footer"

// markup
const IndexPage = () => {
  return (
    <main>
      <Logo />
      <Nav />
      <Content />
      <Footer />
    </main>
  )
}

export default IndexPage
