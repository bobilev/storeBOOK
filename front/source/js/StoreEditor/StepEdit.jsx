import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

class StepEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textStep: props.step.Text,
      answers: props.step.Answers
    }

  }
  render() {
    let { textStep,answers } = this.state
    let AddStep
    if(answers.length === 0){
      AddStep =
      <Button id="btnAddStep" variant="fab" color="primary">
        <AddIcon />
      </Button>
    }


    let AnswersPull
    if(answers.legth !== 0) {
      AnswersPull = answers.map(function(val){
        return (
          <Button key={Date.now()+val.NextStep} id=""  variant="raised" size="large" color="primary">
            {val.Text}
          </Button>
        )
      }.bind(this))
    }

    return (
      <div className="stepEdit">
        <Paper className="paperStoreEdit" contentEditable={true} suppressContentEditableWarning={true}>
          <p>{textStep}</p>
        </Paper>
        {AddStep}
        {AnswersPull}
      </div>
    );
  }
}

export default StepEdit;
