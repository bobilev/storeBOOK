import React, { Component } from 'react';
import ReactModal from 'react-modal';

class ModalSetting extends Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  render () {
    return (
      <div className='storeIconaddNewStore'>
        <img src='/dist/icon/addNewStore.png' onClick={this.handleOpenModal}/>
        <ReactModal 
            className="Modal" overlayClassName="Overlay" contentLabel="Minimal Modal Example"
            isOpen={this.state.showModal} onRequestClose={this.handleCloseModal}
        >
          <p>Modal text!</p>
          <button onClick={this.handleCloseModal}>Close</button>
        </ReactModal>
      </div>
    );
  }
}

class NewStore extends Component {
  render() {
    return(
      <div id='newstore'>
          <ModalSetting />
      </div>
    );
  }
  componentDidMount() {
    ReactModal.setAppElement('#newstore');
  }
}

export default NewStore;
