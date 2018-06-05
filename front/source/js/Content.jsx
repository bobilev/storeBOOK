import React, { Component } from 'react'
import Store from './Store.jsx'
import NewStore from './NewStore.jsx'
import { hot } from 'react-hot-loader'

class Content extends Component {
  state = {
    stores: []
  };
  componentDidMount() {
    fetch("http://localhost:3000/api?method=store&getstoresuser=chatbook")
      .then(response => response.json())
      .then(data => {
        //var arrayStores = Object.keys(data).map(key => data[key]);
        this.setState({ stores: data });
      });
  }
  render() {
    console.log(Array.isArray(this.state.stores))
    var Stores = this.state.stores.map(function(val) {
      return (
         <Store key={Date.now()+val.Storeid} id={val.Storeid} name={val.Name} media={val.Media}/>
       );
    })
    return(
      <div id='main_center'>
        <div id='filtr'>
          <img src='/dist/icon/filtrmenu.png' />
          <img src='/dist/icon/filtrlistmenu.png' />
        </div>
        <div id='content'>
          <NewStore />
          {Stores}
        </div>
      </div>
    );
  }
}

export default Content;
