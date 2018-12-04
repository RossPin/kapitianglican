import React from 'react'
import { Parallax } from "react-parallax"
import { Link } from 'react-router-dom'
import Notices from './Notices'

class Home extends React.Component {
    render () {
        return (
            <div>
                <Parallax bgImage='/images/Kapiti_island.jpg' strength={500} >
                    <div className='parallaxContent' style={{ height: 400 }}> 
                        <h1>Welcome to our community</h1>                   
                    </div>
                </Parallax>                
                <div className="about">
                    <h1>Who we are</h1>
                    <p>Kapiti anglican is a community made up of 3 churches from Paraparaumu through to Paekakariki </p>
                    <div>
                        <Link className="parishTile" to={'/stPauls'}><h4>St Paul's</h4><img src="/images/stPauls.jpeg" /></Link>
                        <Link className="parishTile mid" to={'/stMarks'}><h4>St Mark's</h4><img src="/images/stMarks.jpeg" /></Link>
                        <Link className="parishTile" to={'/stPeters'}><h4>St Peter's</h4><img src="/images/stPeters.jpeg" /></Link>
                    </div>
                </div>
                <Parallax bgImage='/images/Raumati-Dune.jpg' strength={500} >
                    <div className='parallaxContent' style={{ height: 400 }}> 
                        <h1>Notices</h1>                   
                    </div>
                </Parallax>
                <Notices history={this.props.history}/>  
            </div>
        )
    }
}

export default Home