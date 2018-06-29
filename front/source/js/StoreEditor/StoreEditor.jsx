import React from 'react';
import StepEdit from './StepEdit.jsx'
import { fecthapi } from '../fetchapi.js'

class StoreEditor extends React.Component {//SavePull
  constructor(props) {
    super(props);
    this.state = {
      StoreId: props.storeDate.StoreId,
      Steps: []
    }
    this.upStoreDate()
  }
  upStoreDate = () => {
    console.log("upStoreDate")
    let mapParams = new Map()
    mapParams.set('storeid', this.state.StoreId)
    let res = fecthapi('step','getsteps',mapParams)
    res.then(res => {
      this.setState({Steps: res})
      console.log("all steps",res)
    })

  }
  render() {
    var Steps = this.state.Steps.map(function(val) {
      return (
         <StepEdit key={Date.now()+val.StepId} step={val}/>
       );
    }.bind(this))
    return (
      <div id='StoreEditor'>
        <div className='StoreEditorContent'>

          <div className="upBarStoreEdit">


            <div>ICON <br/> (направление)</div>
            <div>название</div>
            <div>сохранить</div>
            <div className="upBarStoreEditClose">
              <img src='/dist/icon/close.png' onClick={this.props.closeStoreEdit} />
            </div>
          </div>
          <div>
            {Steps}
          </div>
        </div>
      </div>
    );
  }
}

export default StoreEditor;
