import React from 'react'
import Sundays from './sectionComponents/Sundays'
import FourPlusMore from './sectionComponents/FourPlusMore'
import SchoolsSupport from './sectionComponents/SchoolsSupport'
import PlayGroup from './sectionComponents/PlayGroup'

class ChildrenAndFamilies extends React.Component {
  render () {
    return (
      <div className='childrenAndFamilies'>
        <div className='content'>
          <Sundays />
          <FourPlusMore />
          <SchoolsSupport />
          <PlayGroup />
        </div>
      </div>
    )
  }
}

export default ChildrenAndFamilies