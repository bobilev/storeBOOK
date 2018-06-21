import React, { Component } from 'react'
import Store from './Store.jsx'
import NewStore from './NewStore.jsx'
import { hot } from 'react-hot-loader'

class Content extends Component {
  constructor() {
    super();
    this.state = {
      stores: []
    };
    this.fetchapiContent = this.fetchapiContent.bind(this);
  }
  fetchapiContent(name) {
    console.log("fetch start",name)
    fetch("http://localhost:3000/api?class=store&method=getstoresuser&user="+name)
      .then(response => response.json())
      .then(data => {
        //var arrayStores = Object.keys(data).map(key => data[key]);
        this.setState({ stores: data });
      });
  }
  componentDidMount() {
    this.fetchapiContent('chatbook')
  }
  render() {
    console.log(Array.isArray(this.state.stores))
    var Stores = this.state.stores.map(function(val) {
      return (
         <Store key={Date.now()+val.Storeid} storedate={val}/>
       );
    })
    return(
      <div id='main_center'>
        <div id='filtr'>
          <img src='/dist/icon/filtrmenu.png' />
          <img src='/dist/icon/filtrlistmenu.png' />
        </div>
        <div id='content'>
          <NewStore onfetchapicontent={this.fetchapiContent}/>
          {Stores}
        </div>
      </div>
    );
  }
}

export default Content;
