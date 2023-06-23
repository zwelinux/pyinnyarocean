import * as React from 'react'
import Navbar from './components/navbar'
import Main from './components/main'
import Footer from './components/footer'

const IndexPage = () => {
  return(
    <>
      <Navbar />
      <Main routeName="HOME PAGE ROUTE">
        <div class="main-container">
            <img src="https://images.unsplash.com/photo-1467173195972-87d54818ee82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" width="100%" alt="home" />
            <p class="main-container-text">WAANEIZA PYIN NYAR OCEAN</p>
            <br />
            <a href="#" class="button">JOIN</a>
        </div>
      </Main>
      <Footer />
    </>
  )
}

export default IndexPage