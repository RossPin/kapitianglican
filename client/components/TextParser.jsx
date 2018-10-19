import React from 'react'
import Parser from 'html-react-parser'

class TextParser extends React.Component {
  render(){
    let text = this.props.text.replace(/[\r\n]/g, '<br/>')
    text = text.replace(/{\*/g, '<strong>')
    text = text.replace(/\*}/g, '</strong>')
    text = text.replace(/{\#/g, '<em>')
    text = text.replace(/\#}/g, '</em>')
    return (
      <p>{Parser(text)}</p>
    )
  }
}

export default TextParser