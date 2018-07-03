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
    console.log("this.props.html",this.props.html)
    // const { ...otherAttributes } = this.props
    return(
      <p  ref={this.textHTML}
          onInput={this.emitChange}
          onBlur={this.emitChange}
          
          dangerouslySetInnerHTML={{__html: this.props.html}}
      >

      </p>
      )
  }
  componentDidMount() {
    if (this.props.html == "") {
      console.log("componentDidMount - focus")
      this.textHTML.current.focus()
    }
  }
}
