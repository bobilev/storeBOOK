import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

class StepEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text

    }

  }
  render() {
    let { text } = this.state
    let textStep = text
    return (
      <div className="stepEdit" >
        <Paper className="paperStoreEdit" contentEditable={true} suppressContentEditableWarning={true}>
          <p>{textStep}</p>
        </Paper>
        <Button id="btnAddStep" variant="fab" color="primary">
          <AddIcon />
        </Button>
      </div>
    );
  }
}

export default StepEdit;
