import React from 'react';
import StepEdit from './StepEdit.jsx'

class StoreEditor extends React.Component {

  render() {

    return (
      <div id='StoreEditor'>
        <div className='StoreEditorContent'>

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

export default StoreEditor;
