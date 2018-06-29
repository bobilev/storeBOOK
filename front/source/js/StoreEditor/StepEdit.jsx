import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

class StepEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stepId: props.step.StepId,
      textStep: props.step.Text,
      answers: props.step.Answers
    }

  }
  render() {
    let { textStep,answers } = this.state
    let AddStep
    if(answers == null){
      AddStep =
      <Button id="btnAddStep" variant="fab" color="primary">
        <AddIcon />
      </Button>
    }


    let AnswersPull
    if(answers != null) {
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
        <Paper className="paperStoreEdit" contentEditable={true} suppressContentEditableWarning={true} elevation={8}>
          <p>{textStep}</p>
        </Paper>
        <Paper className="paperStoreEdit" elevation={8}>{AnswersPull}</Paper>
        {AddStep}

      </div>
    );
  }
}

export default StepEdit;
