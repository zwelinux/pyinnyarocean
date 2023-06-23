import * as React from 'react'
import Navbar from './components/navbar'
import Main from './components/main'

const IndexPage = () => {
  return(
    <>
      <Navbar />
      <Main routeName="HOME PAGE ROUTE">
        <div class="main-container">
            <img src="https://images.unsplash.com/photo-1518467166778-b88f373ffec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2531&q=80" width="100%" alt="home" />
            <p class="main-container-text">Some Codes are Better Be Deployed!</p>
            <br />
            <a href="#" class="button">JOIN</a>
        </div>
      </Main>
    </>
  )
}

export default IndexPage