import React from 'react'
import { Parallax } from "react-parallax"

class Home extends React.Component {
    render () {
        return (
            <div>
                <Parallax bgImage='/images/kapiti.jpg' strength={500}>
                    <div style={{ height: 400 }}> 
                        <h1>Our Community</h1>                   
                    </div>
                </Parallax>                
                <div className="about">
                    <h1>Welcome</h1>
                    <p>Kapiti anglican is a community made up of 3 churches from Paraparaumu through to Paekakariki </p>
                </div>
            </div>
        )
    }
}

export default Home