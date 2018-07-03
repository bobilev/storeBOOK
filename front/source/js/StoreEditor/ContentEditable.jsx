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
    console.log("this.props.html",this.props.html)
    if ( this.props.html !== this.textHTML.current.innerHTML ) {
        this.textHTML.current.innerHTML = this.props.html
    } else if (this.props.html == "") {
      console.log("componentDidUpdate - focus")
      this.textHTML.current.innerHTML = "<p>1</p>"

    }
  }
  emitChange = () => {
    var html = this.textHTML.current.innerHTML
    if (this.props.onChange && html !== this.lastHtml) {
        this.props.onChange({
          target: { value: html }
        })
    }
    this.lastHtml = html
  }

  render() {
    // const { ...otherAttributes } = this.props
    return(
      <p  ref={this.textHTML}
          onInput={this.emitChange}
          onBlur={this.emitChange}
          contentEditable={true}
          suppressContentEditableWarning={true}
          dangerouslySetInnerHTML={{__html: this.props.html}}
          data-placeholder="Insert text here..."
      >

      </p>
      )
  }
  componentDidMount() {
    this.textHTML.current.focus()
  }
}
