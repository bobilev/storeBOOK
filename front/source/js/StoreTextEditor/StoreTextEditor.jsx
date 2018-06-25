import React from 'react';
import Paper from '@material-ui/core/Paper';

class StoreTextEditor extends React.Component {

  render() {

    return (
      <div id='StoreTextEditor'>
        <div className='StoreTextEditorContent'>
          <div className="upBarStoreEditClose">
            <img src='/dist/icon/close.png' onClick={this.props.closeStoreEdit} />
          </div>
          <div className="upBarStoreEdit">

          </div>
          <div>
            <Paper className="paperStoreEdit">
              test 1
            </Paper>
            <Paper className="paperStoreEdit">
              test 2
            </Paper>
            <Paper className="paperStoreEdit">
              test 3
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}

export default StoreTextEditor;
