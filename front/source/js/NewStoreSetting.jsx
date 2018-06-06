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
    nameStore: "",
    directionStore: '',
    descriptionStore: "",
    open: false,
    tabIndex: 0,
    textBtn: "Дальше",
    nextBool: true,
    tooltipopen: false

  };
  handleClose = () => {
    this.setState({open: false});
  };

  handleOpen = () => {
    this.setState({open: true});
  };
  // handleChange = (event, value) => {
  //   this.setState({value});
  // }
  handleChangeIndex = index => {
    this.setState({tabIndex: index});
  }
  handleChangeSelect = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onClikNext = () => {
    console.log("onclick");
    if (this.state.tabIndex == 0) {
      this.setState({tabIndex: 1});
    }
    if (this.state.tabIndex == 1) {
      this.setState({tabIndex: 2,textBtn: "Готово"});
    }
    if (this.state.tabIndex == 2) {//Тут создаю новый Store в DB , закрываю окно настроек и запускаю редактор.
      console.log("done");
    }

  }
  onClikBack = () => {
    if (this.state.tabIndex == 1) {
      this.setState({tabIndex: 0});
    }
    if (this.state.tabIndex == 2) {
      this.setState({tabIndex: 1});
    }
  }
  handleChangeTextField = name => event => {
    const {nameStore,directionStore,descriptionStore} = this.state;
    this.setState({[name]: event.target.value});

  }
  render() {
    const {
      nameStore,
      directionStore,
      descriptionStore,
      open,
      tabIndex,
      textBtn,
      nextBool,
      tooltipopen
    } = this.state;

    if (nameStore == "" || directionStore == "") {
      console.log("nextBool: true")
      if(!nextBool) {
        this.setState({nextBool: true})
      }
    } else {
      console.log("nextBool: false")
      if(nextBool) {
        this.setState({nextBool: false})
      }
    }


    const buttonNext =//next
      <Button
        className="btnTabNext"
        onClick={this.onClikNext}
        variant="raised"
        color="primary"
        disabled={nextBool}>
        {textBtn}
      </Button>;
    function buttonBack() {
      if (tabIndex != 0) {
        return (<Button
          className="btnTabBack"
          onClick={this.onClikBack}
          variant="raised"
          color="primary">
          Назад
        </Button>);
      }
    }
    const nameStoreTextField =
      <TextField
        id="name"
        label="Название"
        className="TabContainer-input"
        value={nameStore}
        onChange={this.handleChangeTextField('nameStore')}
        margin="normal"
      />
    const descriptionStoreTextField =
      <TextField
        label="Описание"
        multiline
        rowsMax="12"
        value={descriptionStore}
        onChange={this.handleChangeTextField('descriptionStore')}
        margin="normal"
        className="TabContainer2-input"
      />
    const selectDirection =
      <FormControl >
          <InputLabel htmlFor="controlled-open-select">Направленость</InputLabel>
          <Select
            className="TabContainer-input"
            open={open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={directionStore}
            onChange={this.handleChangeTextField('directionStore')}
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

////////////////////////////////////////////////////////////////////////////////
    return (
      <div className="ModalContentTabs">
        <AppBar position="static" color="default">
        <Tabs
          value={tabIndex}
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
          index={tabIndex}
          onChangeIndex={this.handleChangeIndex}
        >
          <div className="TabContainer">
            {nameStoreTextField}
            {selectDirection}
          </div>
          <div className="TabContainer">
            {descriptionStoreTextField}
          </div>
          <div className="TabContainer">
            Обложка.img
          </div>
        </SwipeableViews>
        {buttonBack}
        {buttonNext}
      </div>
    );
  }
}

export default NewStoreSetting;
