import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import StepEdit from './StepEdit.jsx'
import { fecthapi } from '../fetchapi.js'

class StoreEditor extends React.Component {//SavePull
  constructor(props) {
    super(props);
    this.state = {
      StoreId: props.storeDate.StoreId,
      StoreName: props.storeDate.Name,
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
      this.setState({Steps: res})
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
  ChangeStep = (newObj) => {//{index: '',method: '',stepId: '',text: '',answer: []}
    let lastSteps = this.state.Steps
    switch (newObj.method) {
      case 'edittext':
          if (lastSteps[newObj.index].Text != newObj.text) {
            lastSteps[newObj.index].Text = newObj.text
            this.setState({
              Steps: lastSteps
            })
          }
    }
  }
  //Matching

  render() {
    const { StoreName } = this.state
    var Steps = this.state.Steps.map(function(val,index) {
      return (
         <StepEdit key={val.StepId} indexArray={index} step={val} onAddStep={this.onAddStep} ChangeStep={this.ChangeStep}/>
       );
    }.bind(this))
    return (
      <div id='StoreEditor'>
        <div className='StoreEditorContent'>
          <div id="upBarStoreEdit">
            <div>{StoreName} + 18</div>

            <Button
              className="btnTabNext"

              variant="raised"
              color="primary">
              Сохранить
            </Button>
            <Button
              className="btnTabNext"

              variant="raised"
              color="primary">
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
