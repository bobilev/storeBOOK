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
    // let { stepId } = this.state
    // let newStepId = Number(stepId)+1
    // this.props.onAddStep(
    //   this.props.indexArray,//какой элемент менять
    //   {"NextStep":newStepId.toString(),"Text":"Дальше"},//новый ансвер
    //   newStepId.toString()//StepId для нового Step
    // )
  }
  onEditTextStep = (event) => {//->SavePull
    // this.setState({textStep: event.target.value})
    this.props.ChangeStep({index: this.props.indexArray ,method: 'edittext',text: event.target.value})
    // console.log("onEditTextStep")
  }
  onEditTextAnswer = () => {//->SavePull

  }
  render() {
    let { StepId,Text,Answers } = this.props.step
    let AddStep
    if(Answers == null || isEmpty(Answers)){
      console.log(StepId,"AddStep",isEmpty(Answers),Answers === null)
      AddStep =
      <Button key={Date.now()+StepId} id="btnAddStep" variant="fab" onClick={this.onAddStep}>
        <AddIcon />
      </Button>
    }

    let AnswersPull
    if(Answers != null && !isEmpty(Answers)) {
      console.log(StepId,"AnswersPull",Answers !== null,!isEmpty(Answers))
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
