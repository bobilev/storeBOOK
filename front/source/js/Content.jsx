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
    this.fetcreload = this.fetcreload.bind(this);
  }
  fetcreload(name) {
    console.log("fetch start",name)
    fetch("http://localhost:3000/api?class=store&method=getstoresuser&user="+name)
      .then(response => response.json())
      .then(data => {
        this.setState({ stores: data });
      });
  }
  componentDidMount() {
    this.fetcreload('chatbook')
  }
  render() {
    console.log(Array.isArray(this.state.stores))
    var Stores = this.state.stores.map(function(val) {
      return (
         <Store key={Date.now()+val.Storeid} storedate={val} onfetcreload={this.fetcreload}/>
       );
    }.bind(this))
    return(
      <div id='main_center'>
        <div id='filtr'>
          <img src='/dist/icon/filtrmenu.png' />
          <img src='/dist/icon/filtrlistmenu.png' />
        </div>
        <div id='content'>
          <NewStore onfetcreload={this.fetcreload}/>
          {Stores}
        </div>
      </div>
    );
  }
}

export default Content;
