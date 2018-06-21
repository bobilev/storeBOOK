import React, { Component } from 'react'
import ReactModal from 'react-modal'
import NewStoreSetting from './NewStoreSetting.jsx'

class NewStore extends Component {
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
    this.props.onfetchapicontent('chatbook');
  }
  render() {
    return(
      <div id='newstore'>
        <div className='storeIconaddNewStore'>
          <img src='/dist/icon/addNewStore.png' onClick={this.handleOpenModal}/>
          <ReactModal
              className="Modal" overlayClassName="Overlay" contentLabel="Minimal Modal Example"
              isOpen={this.state.showModal} onRequestClose={this.handleCloseModal}
          >

            <NewStoreSetting onclosemodal={this.handleCloseModal}/>

          </ReactModal>
        </div>
      </div>
    );
  }
  componentDidMount() {
    ReactModal.setAppElement('#newstore');
  }
}

export default NewStore;
