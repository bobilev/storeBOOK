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
import { fecthapi } from './fetchapi.js'

class EditStoreSetting extends Component {
  state = {
    nameStore: this.props.storedate.Name,
    directionStore: this.props.storedate.Direction,
    descriptionStore: this.props.storedate.Description,
    open: false,//select
    tabIndex: 0,
    saveBool: true,
    tooltipopen: false

  };
  handleClose = () => {//select "Направленость"
    this.setState({open: false});
  }

  handleOpen = () => {//select "Направленость"
    this.setState({open: true});
  }
  // handleChange = (event, value) => {
  //   this.setState({value});
  // }
  handleChangeIndex = index => {//swiped tabs
    this.setState({tabIndex: index});
  }

  onClickNext = () => {
    console.log("onclick");
    if (this.state.tabIndex == 0) {
      this.setState({tabIndex: 1});
    }
    if (this.state.tabIndex == 1) {
      this.setState({tabIndex: 2});
    }
    // if (this.state.tabIndex == 2) {//Тут создаю новый Store в DB , закрываю окно настроек и запускаю редактор.
    //   console.log("done")
    //   let mapParams = new Map()
    //   mapParams.set('name', this.state.nameStore)
    //   mapParams.set('media', '0')
    //   mapParams.set('author', 'chatbook')
    //   mapParams.set('direction', this.state.directionStore)
    //   mapParams.set('description', this.state.descriptionStore)
    //   mapParams.set('genre', '')
    //   mapParams.set('restriction', '')
    //   let res = fecthapi('store','addstore',mapParams)
    //   res.then(res => {
    //     console.log("newStoreId",res)
    //   })
    //   this.props.onclosemodal()
    // }

  }
  onClickBack = () => {
    if (this.state.tabIndex == 1) {
      this.setState({tabIndex: 0});
    }
    if (this.state.tabIndex == 2) {
      this.setState({tabIndex: 1});
    }
  }
  onClickSave = () => {

  }
  handleChangeTextField = name => event => {
    this.setState({[name]: event.target.value});

  }
  componentDidUpdate() {
    // const {
    //   nameStore,
    //   directionStore,
    //   descriptionStore,
    // } = this.state;
    // const {
    //   Name,
    //   Direction,
    //   Description
    // } = this.props.storedate;
    // if (Name != nameStore || Direction != directionStore || Description != descriptionStore) {
    //   this.setState({saveBool: false})
    // }
    // if (Name == nameStore && Direction == directionStore && Description == descriptionStore) {
    //   this.setState({saveBool: true})
    // }
    console.log("shouldComponentUpdate")
  }
  render() {

    const {
      nameStore,
      directionStore,
      descriptionStore,
      open,
      tabIndex,
      saveBool,
      tooltipopen
    } = this.state;

    // if (nameStore == "" || directionStore == "") {
    //   console.log("nextBool: true")
    //   if(!nextBool) {
    //     this.setState({nextBool: true})
    //   }
    // } else {
    //   console.log("nextBool: false")
    //   if(nextBool) {
    //     this.setState({nextBool: false})
    //   }
    // }


    let buttonNext//next
    if(tabIndex != 2) {
      buttonNext =
      <Button
        className="btnTabNext"
        onClick={this.onClickNext}
        variant="raised"
        color="primary">
        Дальше
      </Button>
    }
    let classBtnBack = "btnTabBack"
    if (tabIndex == 2) {classBtnBack = "btnTabNext"}
    let buttonBack//back
    if(tabIndex != 0) {
      buttonBack =
      <Button
        className={classBtnBack}
        onClick={this.onClickBack}
        variant="outlined"
        color="primary">
        Назад
      </Button>
    }
    let buttonSave//back
    if(tabIndex != 3) {
      buttonSave =
      <Button
        className="btnTabSave"
        onClick={this.onClickSave}
        variant="outlined"
        color="default"
        disabled={saveBool}>
        Сохранить
      </Button>
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
            <MenuItem value={"jen"}>
              <Tooltip id="Tooltip" placement="right" enterDelay={200}
                title="Сюжет без романтических/сексуальных действий" >
                <span className="elemSelectMenuspan">Джен</span>
              </Tooltip>
            </MenuItem>
            <MenuItem value={"geth"}>
              <Tooltip id="Tooltip" placement="right" enterDelay={200}
                title="Романтическое/сексуальное действие между мужчиной и женщиной" >
                <span className="elemSelectMenuspan">Гет</span>
              </Tooltip>
            </MenuItem>
            <MenuItem value={"femslash"}>
              <Tooltip id="Tooltip" placement="right" enterDelay={200}
                title="Романтическое/сексуальное действие между женщинами" >
                <span className="elemSelectMenuspan">Фемслэш</span>
              </Tooltip>
            </MenuItem>
            <MenuItem value={"slash"}>
              <Tooltip id="Tooltip" placement="right" enterDelay={200}
                title="Романтическое/сексуальное действие между мужчинами" >
                <span className="elemSelectMenuspan">Слэш</span>
              </Tooltip>
            </MenuItem>
            <MenuItem value={"triangle"}>
              <Tooltip id="Tooltip" placement="right" enterDelay={200}
                title="Романтическое/сексуальное действие между несколькими мужчинами и женщинами" >
                <span className="elemSelectMenuspan">Треугольник (любовный треугольник)</span>
              </Tooltip>
            </MenuItem>
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
        {buttonSave}
      </div>
    );
  }
}

export default EditStoreSetting;
