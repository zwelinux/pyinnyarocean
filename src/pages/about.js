import * as React from 'react'
import Navbar from './components/navbar'
import Main from './components/main'

const AboutPage = () => {
    return(
        <>
            <Navbar />
            <Main routeName="ABOUT PAGE HERE">
                <div class="main-container">
                    <img src="https://plus.unsplash.com/premium_photo-1661391301307-dcadbcaa8171?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80" width="100%"  alt="about" />
                    <p class="main-container-text">
                        PWA stands for Progressive Web App. It is a type of web application that is designed to work on any device and provide a native app-like experience to users. 
                        PWAs are built using web technologies such as HTML, CSS, and JavaScript and are designed to be fast, reliable, and engaging. 
                    </p>
                </div>
            </Main>
        </>
    )
}

export default AboutPage