import React from 'react';

export default class ContentEditable extends React.Component {
  constructor(props) {
    super(props)
    this.textHTML = React.createRef()
  }
  shouldComponentUpdate(nextProps){
    return nextProps.html !== this.textHTML.current.innerHTML
  }
  componentDidUpdate() {
    if ( this.props.html !== this.textHTML.current.innerHTML ) {
        this.textHTML.current.innerHTML = this.props.html
    }
  }
  emitChange = () => {
    var html = this.textHTML.current.innerHTML
    if (this.props.onChange && html !== this.lastHtml) {
        this.props.onChange({
          target: { value: html }
        })
    }
    if (html == "") {
      this.textHTML.current.innerHTML = "<p><br></p>"
    }
    this.lastHtml = html
  }
  render() {
    return(
      <div ref={this.textHTML}
           onInput={this.emitChange}
           onBlur={this.emitChange}
           contentEditable
           suppressContentEditableWarning
           dangerouslySetInnerHTML={{__html: this.props.html}}
      >
      </div>
      )
  }
  componentDidMount() {
    if (this.props.html == "") {
      document.execCommand("defaultParagraphSeparator", true, "p")
      //console.log("componentDidMount - focus")
      this.textHTML.current.innerHTML = "<p><br></p>"
      this.textHTML.current.focus()
    }
  }
}
