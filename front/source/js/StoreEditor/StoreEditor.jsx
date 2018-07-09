import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import DoneIcon from '@material-ui/icons/Done'
import ClearIcon from '@material-ui/icons/Clear'
import StepEdit from './StepEdit.jsx'
import { fecthapi, deepClonObject } from '../util.js'

class StoreEditor extends React.Component {//SavePull
  constructor(props) {
    super(props);
    this.state = {
      StoreId: props.storeDate.StoreId,
      StoreName: props.storeDate.Name,
      OriginalSteps: [],
      Steps: [],
      SavePull: []
    }

  }
  upStoreDate = () => {
    console.log("upStoreDate")
    let mapParams = new Map()
    mapParams.set('storeid', this.state.StoreId)
    let res = fecthapi('step','getsteps',mapParams)
    res.then(res => {
      this.setState({Steps: res, OriginalSteps: deepClonObject(res)})
      console.log("all steps",res)
    })
  }
  onAddStep = (stepNum,textAnswer,nextStep) => {//->SavePull
    let newSteps = this.state.Steps

    newSteps[stepNum].Answers = newSteps[stepNum].Answers || []

    newSteps[stepNum].Answers.push(textAnswer)
    newSteps.push(this.NewStep(nextStep))
    console.log("NewAddStep",stepNum,textAnswer)
    console.log("newSteps",newSteps)
    this.setState({
      Steps: newSteps
    })
  }
  NewStep = (nextStep) => {
    return {
      StoreId: this.state.StoreId,
      StepId: nextStep,
      Media: 0,
      Text: "",
      Answers: []
    }
  }
  ChangeStore = (newObj) => {//{index: '',method: '',stepId: '',text: '',answer: []}
    let {OriginalSteps, Steps, SavePull} = this.state
    switch (newObj.method) {
      case 'edittext':
        console.log('newObj.text [',OriginalSteps[newObj.index].Text,' - ',newObj.text,']')
        if (OriginalSteps[newObj.index].Text !== newObj.text) {//new Text
          console.log('newObj.text true')
          Steps[newObj.index].Text = newObj.text
          // SavePull.push(newObj)
          SavePull[newObj.index] = newObj
          this.setState({Steps: Steps,SavePull: SavePull})
        } else {
          console.log('newObj.text false')
          delete SavePull[newObj.index]
        }

    }
  }
  //Matching

  render() {
    console.log('render')


    const { StoreName } = this.state
    var Steps = this.state.Steps.map(function(val,index) {
      return (
         <StepEdit key={val.StepId} indexArray={index} step={val} onAddStep={this.onAddStep} ChangeStore={this.ChangeStore}/>
       );
    }.bind(this))
    return (
      <div id='StoreEditor'>
        <div className='StoreEditorContent'>
          <div id="upBarStoreEdit">
            <div className="upBarStoreEditName">{StoreName} + 18</div>

            <Button
              id="btnSavePull"
              size="small"
              variant="raised"
              color="primary"
              disabled={false}>
              Сохранить
            </Button>
            <Button
              id="btnSaveClear"
              size="small"
              variant="outlined">
              {/**<ClearIcon />**/}
              Отмена
            </Button>

            <div className="upBarStoreEditClose">
              <img src='/dist/icon/close.png' onClick={this.props.closeStoreEdit} />
            </div>
          </div>
          <div id="StepEditContainer">
            {Steps}
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.upStoreDate()
  }
}

export default StoreEditor;
