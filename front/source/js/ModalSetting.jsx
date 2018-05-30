import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AutocompleteExample from './autocomplete.jsx';


class NewStoreSetting extends Component {
  render() {
    return(
      <div>
        <Tabs>
          <TabList>
            <Tab>Title 1</Tab>
            <Tab>Title 2</Tab>
            <Tab>Title 3</Tab>
          </TabList>
          <TabPanel>
            <div className='settingOne'>
              <div className="group">
                <input type="text" id="name" required="required"/>
                <label htmlFor="name">Название рассказа</label>
                <div className="bar"></div>
              </div>
              Категория
              <br/>-----------<br/><br/>
              Жанр
              <AutocompleteExample />
              Рейтин+
              <AutocompleteExample />
            </div>
          </TabPanel>
          <TabPanel>
            <div className='settingTwo'>
              setting 2
            </div>
          </TabPanel>
          <TabPanel>
            <div className='settingThree'>
              setting 3
            </div>
          </TabPanel>
        </Tabs>
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
