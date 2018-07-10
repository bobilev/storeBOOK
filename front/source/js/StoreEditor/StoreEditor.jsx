import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import DoneIcon from '@material-ui/icons/Done'
import ClearIcon from '@material-ui/icons/Clear'
import StepEdit from './StepEdit.jsx'
import { newfecthapi, fecthapi, deepClonObject, isEmpty } from '../util.js'

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
  ChangeStore = (newObj) => {//{index: '',method: '',stepId: '',text: '',answer: []}
    let {OriginalSteps, Steps, SavePull} = this.state
    switch (newObj.method) {
      case 'edittext':
      console.log("OriginalSteps.indexOf(newObj.index)",OriginalSteps.indexOf(newObj.index))
        // console.log('newObj.text [',OriginalSteps[newObj.index].Text,' - ',newObj.text,']')
        if ( OriginalSteps.indexOf(newObj.index) === -1 || OriginalSteps[newObj.index].Text !== newObj.text) {//new Text
          console.log('newObj.text true')
          Steps[newObj.index].Text = newObj.text
          // SavePull.push(newObj)
          SavePull[newObj.index] = newObj
          this.setState({Steps: Steps,SavePull: SavePull})
        } else {
          console.log('newObj.text false')
          Steps[newObj.index].Text = newObj.text
          // delete SavePull[newObj.index]
          SavePull.splice(newObj.index, 1)
          this.setState({Steps: Steps,SavePull: SavePull})
        }
        break
      case 'addstep':
        console.log("ChangeStore addstep",newObj)
        if (isEmpty(Steps[newObj.index].Answers)) {
          console.log("Answers пуст")
          Steps[newObj.index].Answers = []
        }
        // Steps[newObj.index].Answers = Steps[newObj.index].Answers || []
        Steps[newObj.index].Answers.push(newObj.answer)
        console.log("Steps.push newObj.answer.NextStep",newObj.answer.NextStep)
        Steps.push(this.NewStep(newObj.answer.NextStep))

        SavePull[newObj.index] = newObj
        this.setState({Steps: Steps,SavePull: SavePull})
        break
    }
  }
  NewStep = (nextStep) => {
    return {
      StoreId: this.state.StoreId,
      StepId: nextStep,
      Media: 0,
      Text: "<p><br></p>",
      Answers: []
    }
  }
  //Matching
  onClickSavePull = () => {
    console.log('onClickSavePull')
    newfecthapi()
  }
  onClickSaveClear = () => {
    console.log('onClickSaveClear')
    let { OriginalSteps } = this.state
    let NewSteps
    this.setState({Steps: deepClonObject(OriginalSteps), SavePull: []})
  }
  render() {
    console.log('render')
    this.btnSavePull = true
    // console.log('SavePull isEmty:',isEmpty(this.state.SavePull))
    if (!isEmpty(this.state.SavePull)) {
      // console.log('SavePull !isEmty:',isEmpty(this.state.SavePull))
      this.btnSavePull = false
    }
    let ButtonsSaveClear
    if (!this.btnSavePull) {
      ButtonsSaveClear =
        <Button
          id="btnSaveClear"
          size="small"
          variant="outlined"
          onClick={this.onClickSaveClear}
          disabled={this.btnSavePull}>
          {/**<ClearIcon />**/}
          Отмена
        </Button>
    }
    const { StoreName } = this.state
    let Steps = this.state.Steps.map(function(val,index) {
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
              size="small"
              variant="raised"
              color="primary"
              onClick={this.onClickSavePull}
              disabled={this.btnSavePull}>
              Сохранить
            </Button>
            {ButtonsSaveClear}
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
