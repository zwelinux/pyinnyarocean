import * as React from 'react'
import './main.css'

const Main = ({ routeName, children }) => {
    return(
        <div class="main">
            <h1>{routeName}</h1>
            {children}
        </div>
    )
}

export default Main