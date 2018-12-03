import React from 'react'
import ParallaxImage from './ParallaxImage'

class Home extends React.Component {
    render () {
        return (
            <div>
                <ParallaxImage />
                <div className="about">
                    <h1>Welcome</h1>
                    <p>Kapiti anglican is a community made up of 3 churches from Paraparaumu through to Paekakariki </p>
                </div>
            </div>
        )
    }
}

export default Home