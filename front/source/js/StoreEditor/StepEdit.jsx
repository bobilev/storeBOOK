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
      // stepId: props.step.StepId,
      // textStep: props.step.Text != ""? props.step.Text:"<br>",
      // answers: props.step.Answers
    }
  }
  onAddStep = () => {//->SavePull
    let { StepId } = this.props.step
    let newStepId = Number(StepId)+100
    this.props.ChangeStore({
      StepId : StepId,
      Index  : this.props.indexArray,
      Method : 'addstep',
      Answer : {NextStep: newStepId.toString(), Text: "Дальше"}
    })
  }
  onEditTextStep = (event) => {//->SavePull
    this.props.ChangeStore({
      StepId : this.props.step.StepId,
      Index  : this.props.indexArray,
      Method : 'edittext',
      Text   : event.target.value
    })
  }
  onEditTextAnswer = () => {//->SavePull

  }
  render() {
    let { StepId,Text,Answers } = this.props.step
    let AddStep
    if(Answers == null || isEmpty(Answers)){
      // console.log(StepId,"AddStep",isEmpty(Answers),Answers === null)
      AddStep =
      <Button key={Date.now()+StepId} id="btnAddStep" variant="fab" onClick={this.onAddStep}>
        <AddIcon />
      </Button>
    }

    let AnswersPull
    if(Answers != null && !isEmpty(Answers)) {
      // console.log(StepId,"AnswersPull",Answers !== null,!isEmpty(Answers))
      AnswersPull = Answers.map(function(val){
        return (
          <Button key={Date.now()+val.NextStep} id="btnAnswer" variant="raised" size="large" fullWidth={true}>
            {val.Text}
          </Button>
        )
      }.bind(this))
    }
    var pStyle = (isEmpty(Answers))? {display: 'none'}:{display: 'block'}
    var PlaceholderStyle = ( Text === "<p><br></p>")? {display: 'block'}:{display: 'none'}

    return (
      <div className="stepEdit">
        <Paper className="paperStoreEdit" elevation={8}>
          <ContentEditable html={Text} onChange={this.onEditTextStep} />
          <p className="paperStoreEditPlaceholder" style={PlaceholderStyle}>Твой рассказ начинается здесь</p>
        </Paper>
        <Paper className="paperStoreAnswers" elevation={8} style={pStyle}>
          {AnswersPull}
        </Paper>
        {AddStep}
        {
          (Answers == null || isEmpty(Answers))?<div id="btnAddStepFix"></div>: ""
        }

      </div>
    );
  }
}

export default StepEdit;
