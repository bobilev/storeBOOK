import React, { Component } from 'react'
import ReactModal from 'react-modal'
import Drawer from '@material-ui/core/Drawer';
import EditStoreSetting from './EditStoreSetting.jsx'
import StoreEditor from './StoreEditor/StoreEditor.jsx'

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storedate: props.storedate,
      showModal: false,
      storeEdit: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  handleOpenModal() {
    this.setState({ showModal: true })
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
    const { storedate, showModal, storeEdit} = this.state
    return(
      <div id='store' >
        <div className='storeIconSetting'>
          <img src='/dist/icon/settings.png' onClick={this.handleOpenModal} />
          <ReactModal
              className="Modal" overlayClassName="Overlay" contentLabel="Minimal Modal Example"
              isOpen={showModal} onRequestClose={this.handleCloseModal}
          >
            <EditStoreSetting onclosemodal={this.handleCloseModal} storedate={storedate} onfetcreload={this.props.onfetcreload}/>
          </ReactModal>
        </div>
        <div>
          <img src='/dist/icon/noalbom.png' onClick={this.openStoreEdit}/>
        </div>
        <div className="storeName" onClick={this.openStoreEdit}>
          <span>{storedate.Name}</span>
        </div>

        <Drawer
          anchor="bottom"
          open={storeEdit}
        >
          <StoreEditor storedate={storedate} closeStoreEdit={this.closeStoreEdit}/>
        </Drawer>
      </div>
    );
  }
  componentDidMount() {
    ReactModal.setAppElement('#newstore');
  }
}

export default Store;
