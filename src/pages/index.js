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
            <img src="https://i.pinimg.com/originals/05/44/d6/0544d6f47b55ba26976ab3964fea7e6b.jpg" width="100%" alt="home" />
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