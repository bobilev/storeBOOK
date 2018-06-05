import React, { Component }from 'react'

class Store extends Component {
  render() {
    return(
      <div id='store'>
        <div className='storeIconSetting'>
          <img src='/dist/icon/settings.png' />
        </div>

        <div className="storeName"><span>{this.props.name}</span></div>
      </div>
    );
  }
}

export default Store;
