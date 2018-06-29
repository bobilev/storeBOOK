import React, { Component } from 'react'
import ReactModal from 'react-modal'
import Drawer from '@material-ui/core/Drawer'
import EditStoreSetting from './EditStoreSetting.jsx'
import StoreEditor from './StoreEditor/StoreEditor.jsx'

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storeDate: props.storeDate,
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
    const { storeDate, showModal, storeEdit} = this.state
    return(
      <div id='store' >
        <div className='storeIconSetting'>
          <img src='/dist/icon/settings.png' onClick={this.handleOpenModal} />
          <ReactModal
              className="Modal" overlayClassName="Overlay" contentLabel="Minimal Modal Example"
              isOpen={showModal} onRequestClose={this.handleCloseModal}
          >
            <EditStoreSetting onCloseModal={this.handleCloseModal} storeDate={storeDate} onFetchReload={this.props.onFetchReload}/>
          </ReactModal>
        </div>
        <div>
          <img src='/dist/icon/noalbom.png' onClick={this.openStoreEdit}/>
        </div>
        <div className="storeName" onClick={this.openStoreEdit}>
          <span>{storeDate.Name}</span>
        </div>

        <Drawer
          id="StoreEditorFix"
          anchor="bottom"
          open={storeEdit}
        >
          <StoreEditor storeDate={storeDate} closeStoreEdit={this.closeStoreEdit}/>
        </Drawer>
      </div>
    );
  }
  componentDidMount() {
    ReactModal.setAppElement('#store');
  }
}

export default Store;
