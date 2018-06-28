import React, { Component } from 'react'
import ReactModal from 'react-modal'
import Drawer from '@material-ui/core/Drawer'
import NewStoreSetting from './NewStoreSetting.jsx'
import StoreEditor from './StoreEditor/StoreEditor.jsx'

class NewStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      storeEdit: false
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
  openStoreEdit = () => {
      this.setState({ storeEdit: true });
      console.log("storeEdit: true");
  }
  closeStoreEdit = () => {
      this.setState({ storeEdit: false });
      console.log("storeEdit: false");
  }
  render() {
    const { showModal, storeEdit} = this.state
    return(
      <div id='newstore'>
        <div className='storeIconaddNewStore'>
          <img src='/dist/icon/addNewStore.png' onClick={this.handleOpenModal}/>
          <ReactModal
            className="Modal" overlayClassName="Overlay" contentLabel="Minimal Modal Example"
            isOpen={showModal} onRequestClose={this.handleCloseModal}
          >
            <NewStoreSetting onCloseModal={this.handleCloseModal} onFetchReload={this.props.onFetchReload}/>
          </ReactModal>
        </div>
        <Drawer
          anchor="bottom"
          open={storeEdit}
        >
          <StoreEditor storeDate={''} closeStoreEdit={this.closeStoreEdit}/>
        </Drawer>
      </div>
    );
  }
  componentDidMount() {
    ReactModal.setAppElement('#newstore');
  }
}

export default NewStore;
