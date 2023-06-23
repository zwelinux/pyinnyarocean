import * as React from 'react'
import Navbar from './components/navbar'
import Main from './components/main'

const StoriesPage = () => {
    return(
        <>
            <Navbar />
            <Main routeName="STORIES PAGE ROUTE">
                <div class="main-container">
            

                    <div class="stories-container">
                        <div class="stories">

                            <div class="story-one">
                                <img src="https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" class="story-image" alt="story" />
                                <h3 class="story-title">Odoo Development Course</h3>
                                <a href="#" class="button">JOIN</a>
                            </div>
            
                            <div class="story-two">
                                <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" class="story-image" alt="story" />
                                <h3 class="story-title">PWA Development Course</h3>
                                <a href="#" class="button">JOIN</a>
                            </div>

                        </div>
                    </div>

                </div>
            </Main>
        </>
    )
}

export default StoriesPage