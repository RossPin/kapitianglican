import React from 'react'
import { Link } from 'react-router-dom'
import Notices from './Notices';

function Home(props) {
  
  return (
    <div>
      <Notices history={props.history}/>
    </div>
  )
}

export default Home