import React, { Component } from 'react'
import ReactModal from 'react-modal'
import EditStoreSetting from './EditStoreSetting.jsx'

class Store extends Component {
  constructor(props) {
    super();
    this.state = {
      storedate: props.storedate,
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  handleOpenModal() {
    this.setState({ showModal: true });
  }
  handleCloseModal() {
    this.setState({ showModal: false });
  }
  render() {
    const { storedate, showModal} = this.state
    return(
      <div id='store'>
        <div className='storeIconSetting'>
          <img src='/dist/icon/settings.png' onClick={this.handleOpenModal} />
          <ReactModal
              className="Modal" overlayClassName="Overlay" contentLabel="Minimal Modal Example"
              isOpen={showModal} onRequestClose={this.handleCloseModal}
          >
            <EditStoreSetting onclosemodal={this.handleCloseModal} storedate={storedate} onfetcreload={this.props.onfetcreload}/>
          </ReactModal>
        </div>

        <div className="storeName"><span>{storedate.Name}</span></div>
      </div>
    );
  }
  componentDidMount() {
    ReactModal.setAppElement('#newstore');
  }
}

export default Store;
