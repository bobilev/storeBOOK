import React, { Component } from 'react'
import Store from './Store.jsx'
import NewStore from './NewStore.jsx'
import { hot } from 'react-hot-loader'

class Content extends Component {
  render() {
    return(
      <div id='main_center'>
        <div id='filtr'>
          <img src='/dist/icon/filtrmenu.png' />
          <img src='/dist/icon/filtrlistmenu.png' />
        </div>
        <div id='content'>
          <NewStore />
          <Store />
          <Store />
          <Store />
          <Store />
          <Store />
          <Store />
          <Store />
          <Store />
          <Store />
        </div>
      </div>
    );
  }
}

export default Content;
