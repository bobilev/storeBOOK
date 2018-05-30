import React, { Component } from 'react';
import ReactModal from 'react-modal';

class NewStoreSetting extends Component {
  render() {
    return(
      <div>
        <div className='settingOne'>
          <div class="group">
            <input type="text" id="name" required="required"/>
            <label for="name">Название рассказа</label>
            <div class="bar"></div>
          </div>
        </div>
        <div className='settingTwo'>
          setting 2
        </div>
        <div className='settingThree'>
          setting 3
        </div>
      </div>
    );
  }
}

class ModalSetting extends Component {
  constructor() {
    super();
    this.state = {
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
    return (
      <div className='storeIconaddNewStore'>
        <img src='/dist/icon/addNewStore.png' onClick={this.handleOpenModal}/>
        <ReactModal
            className="Modal" overlayClassName="Overlay" contentLabel="Minimal Modal Example"
            isOpen={this.state.showModal} onRequestClose={this.handleCloseModal}
        >
          <button className='closeModal' onClick={this.handleCloseModal}>X</button>
          <NewStoreSetting />

        </ReactModal>
      </div>
    );
  }
  componentDidMount() {
    ReactModal.setAppElement('#newstore');
  }
}

export default ModalSetting;
