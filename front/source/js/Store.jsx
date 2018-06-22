import React, { Component } from 'react'
import ReactModal from 'react-modal'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import EditStoreSetting from './EditStoreSetting.jsx'
import StoreTextEditor from './StoreTextEditor/StoreTextEditor.jsx'

class Store extends Component {
  constructor(props) {
    super();
    this.state = {
      storedate: props.storedate,
      showModal: false,
      bottom: false
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
  openStoreEdit() {

  }
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
  render() {
    const { storedate, showModal} = this.state
    return(
      <div id='store' onClick={this.toggleDrawer('bottom', true)}>
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

        <SwipeableDrawer
          anchor="bottom"
          open={this.state.bottom}
          onClose={this.toggleDrawer('bottom', false)}
          onOpen={this.toggleDrawer('bottom', true)}
          onKeyDown={this.toggleDrawer('bottom', false)}
        >

          <StoreTextEditor />

        </SwipeableDrawer>
      </div>
    );
  }
  componentDidMount() {
    ReactModal.setAppElement('#newstore');
  }
}

export default Store;
