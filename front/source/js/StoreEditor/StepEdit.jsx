import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ContentEditable from './ContentEditable.jsx'
import { isEmpty } from '../util.js'

class StepEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stepId: props.step.StepId,
      textStep: props.step.Text != ""? props.step.Text:"<br>",
      answers: props.step.Answers
    }
    this.onAddStep = this.onAddStep.bind(this)

  }
  onAddStep = () => {//->SavePull
    let { stepId } = this.state
    let newStepId = Number(stepId)+1
    this.props.onAddStep(
      this.props.indexArray,//какой элемент менять
      {"NextStep":newStepId.toString(),"Text":"Дальше"},//новый ансвер
      newStepId.toString()//StepId для нового Step
    )
  }
  onEditTextStep = (event) => {//->SavePull
    this.setState({textStep: event.target.value})
    console.log("onEditTextStep")
  }
  onEditTextAnswer = () => {//->SavePull

  }
  render() {
    let { stepId,textStep,answers } = this.state
    let AddStep
    if(answers == null || isEmpty(answers)){
      console.log(stepId,"AddStep",isEmpty(answers),answers === null)
      AddStep =
      <Button key={Date.now()+stepId} id="btnAddStep" variant="fab" onClick={this.onAddStep}>
        <AddIcon />
      </Button>
    }


    let AnswersPull
    if(answers != null && !isEmpty(answers)) {
      console.log(stepId,"AnswersPull",answers !== null,!isEmpty(answers))
      AnswersPull = answers.map(function(val){
        return (
          <Button key={Date.now()+val.NextStep} id="btnAnswer" variant="raised" size="large" fullWidth={true}>
            {val.Text}
          </Button>
        )
      }.bind(this))
    }

    return (
      <div className="stepEdit">
        <div></div>
        <Paper className="paperStoreEdit" elevation={8} contentEditable={true}
        suppressContentEditableWarning={true}>
          <ContentEditable html={textStep} onChange={this.onEditTextStep} />
        </Paper>
        <Paper className="paperStoreEdit" elevation={8}>
          {AnswersPull}
        </Paper>
        {AddStep}
        {
          (answers == null || isEmpty(answers))?<div id="btnAddStepFix"></div>: ""
        }

      </div>
    );
  }
}

export default StepEdit;
