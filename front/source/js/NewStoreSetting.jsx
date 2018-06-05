import React,{ Component } from 'react'
import SwipeableViews from 'react-swipeable-views'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Tooltip from '@material-ui/core/Tooltip'

class NewStoreSetting extends Component {
  state = {
    age: '',
    open: false,
    value: 0,
    textBtn: "Дальше",
    name: "",
    multiline: "",
    nextBool: true,
    tooltipopen: false

  };
  handleClose = () => {
    this.setState({open: false});
  };

  handleOpen = () => {
    this.setState({open: true});
  };
  handleChange = (event, value) => {
    this.setState({value});
  }
  handleChangeIndex = index => {
    this.setState({value: index});
  }
  handleChangeSelect = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleTooltipClose = () => {
    this.setState({ tooltipopen: false });
  }
  handleTooltipOpen = () => {
    this.setState({ tooltipopen: true });
  }
  onClikb = () => {
    console.log("onclick");
    if (this.state.value == 0) {
      this.setState({value: 1});
    }
    if (this.state.value == 1) {
      this.setState({value: 2,textBtn: "Готово"});
    }

  }
  handleChangeTextField = name => event => {
    this.setState({[name]: event.target.value});
    if (this.state.name.lenght == "") {
      this.setState({nextBool: true});
    } else {
      this.setState({nextBool: false});
    }
  }
  render() {
    let nextBool = false;
    if (name !== "") {
      nextBool = true;
    }
    const button =
      <Button
        className="btnTabs"
        onClick={this.onClikb}
        variant="raised"
        color="primary"
        disabled={this.state.nextBool}>
        {this.state.textBtn}
      </Button>;
    const nameStore =
      <TextField
        id="name"
        label="Название"
        className="TabContainer-input"
        value={this.state.name}
        onChange={this.handleChangeTextField('name')}
        margin="normal"
      />
    const descriptionStore =
      <TextField
        label="Описание"
        multiline
        rowsMax="12"
        value={this.state.multiline}
        onChange={this.handleChangeTextField('multiline')}
        margin="normal"
        className="TabContainer2-input"
      />
    const selectDirection =
      <FormControl >
          <InputLabel htmlFor="controlled-open-select">Направленость</InputLabel>
          <Select
            className="TabContainer-input"
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.age}
            onChange={this.handleChangeTextField('age')}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem id="elemSelectMenu" value={10}>
              <Tooltip id="Tooltip" placement="right" enterDelay={200} title="1AddAd dA0\rsdf sdf" >
                <span className="elemSelectMenuspan">Ten</span>
              </Tooltip>
            </MenuItem>

            <MenuItem value={20}>
              <Tooltip id="Tooltip" placement="right" enterDelay={500} title="1AddAd dA0\rsdf sdf" >
                <span>Twenty</span>
              </Tooltip>
            </MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>


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
            {nameStore}
            {selectDirection}
          </div>
          <div className="TabContainer">
            {descriptionStore}
          </div>
          <div className="TabContainer">
            Обложка.img
          </div>
        </SwipeableViews>
        {button}
      </div>
    );
  }
}

export default NewStoreSetting;
