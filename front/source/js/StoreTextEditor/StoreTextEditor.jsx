import React from 'react';
import StepEdit from './StepEdit.jsx'

class StoreTextEditor extends React.Component {

  render() {

    return (
      <div id='StoreTextEditor'>
        <div className='StoreTextEditorContent'>

          <div className="upBarStoreEdit">


            <div>ICON <br/> (направление)</div>
            <div>название</div>
            <div>сохранить</div>
            <div className="upBarStoreEditClose">
              <img src='/dist/icon/close.png' onClick={this.props.closeStoreEdit} />
            </div>
          </div>
          <div>
            <StepEdit />
          </div>
        </div>
      </div>
    );
  }
}

export default StoreTextEditor;
