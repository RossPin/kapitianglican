import React from 'react'
import { Link } from 'react-router-dom'

function Home(props) {
  
  return (
    <div className='content'>
      <div className="post">
        <h2 className="title">About Us</h2>
        
        <div className="entry">
          <p>We are a growing, mission shaped, multigenerational, multicultural  parish that is open to a mixture of expressions of being Church. We aim to  bring Christ into the community and the community to Christ. The love of  Christ comes before all else. We strive to reflect a life style that is  distinctive, counter cultural, authentic and attractive.</p>
          <p> <Link to="/Values">These are the values we aspire to live by</Link>. </p>
        </div>
        <div className="meta">
          <p className="links">&nbsp;</p>
        </div>
      </div>
      <div className="post">
        <h2 className="title">Weekly News PDF</h2>
        
        <div className="entry">Weekly News sheet with  Sunday lectionary readings, parish diary and notices. <a href="http://www.kapitianglican.org.nz/weeklynewssheet.pdf" target='_blank'>Latest News sheet</a></div>
    <a href="http://www.kapitianglican.org.nz/sundayservices.pdf"  target='_blank'>Sunday Services PDF</a>
        <div className="meta">
          <p className="links">&nbsp;</p>
        </div>
      </div>
      <div className="post">
        <h2 className="title">Special Notices</h2>
        <div className="entry"><iframe width="640" height="360" src="https://youtu.be/vyUdclr6Kzo" frameBorder="0" allowFullScreen=""></iframe></div>
        <div className="meta"> 
    </div>
        
        <div className="entry">
          <p>
          
          </p>
        </div>
        <div className="meta">
          <p className="links"><a href="http://www.kapitianglican.org.nz/#" className="comments"></a></p>
        </div>
      </div>
    </div>
  )
}

export default Home