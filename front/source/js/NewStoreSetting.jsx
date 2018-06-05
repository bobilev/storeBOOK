import React,{ Component } from 'react'
import SwipeableViews from 'react-swipeable-views'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

class NewStoreSetting extends Component {
  state = {
      value: 0,
      name: "",
      multiline: ""
    };

  handleChange = (event, value) => {
    this.setState({ value });
  }
  handleChangeIndex = index => {
    this.setState({ value: index });
  }
  onClikb = () => {
    console.log("onclick");
    this.setState({ value: 1 });
  }
  handleChangeTextField = name => event => {
   this.setState({
     [name]: event.target.value,
   });
  }
  render() {
    return (
      <div className="ModalContentTabs">
        <AppBar position="static" color="default">
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          fullWidth
        >
          <Tab label="Основное" />
          <Tab label="Описание" />
          <Tab label="Обложка" />
        </Tabs>
        </AppBar>
        <SwipeableViews
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <div className="TabContainer">
            <TextField
              id="name"
              label="Название"
              className="TabContainer-input"
              value={this.state.name}
              onChange={this.handleChangeTextField('name')}
              margin="normal"
            />
          </div>
          <div className="TabContainer">
            <TextField
              label="Описание"
              multiline
              rowsMax="12"
              value={this.state.multiline}
              onChange={this.handleChangeTextField('multiline')}
              margin="normal"
              className="TabContainer2-input"
            />
          </div>
          <div className="TabContainer">
          Обложка.img
          </div>
        </SwipeableViews>
        <Button
          className="btnTabs"
          onClick={this.onClikb}
          variant="raised"
          color="primary"
        >
          Дальше
        </Button>
      </div>
    );
  }
}

export default NewStoreSetting;
