import React,{ Component } from 'react';

function states () {
  return [
    {name: 'AU' },
    {name: 'ER (Established Relationship)' },
    {name: 'Hurt/comfort' },
    {name: 'POV' },
    {name: 'PWP' },
    {name: 'Songfic' },
    {name: 'Ангст' },
    {name: 'Антиутопия' },
    {name: 'Даркфик' },
    {name: 'Детектив' },
    {name: 'Драма' },
    {name: 'Дружба' },
    {name: 'Занавесочная история' },
    {name: 'Злобный автор' },
    {name: 'Исторические эпохи' },
    {name: 'Любовь/Ненависть' },
    {name: 'Мистика' },
    {name: 'Мифические существа' },
    {name: 'Нестандартная поэзия' },
    {name: 'Омегаверс' },
    {name: 'Пародия' },
    {name: 'Первый раз' },
    {name: 'Повседневность' },
    {name: 'Попаданцы' },
    {name: 'Постапокалиптика' },
    {name: 'Пропущенная сцена' },
    {name: 'Психология' },
    {name: 'Романтика' },
    {name: 'Соулмейты' },
    {name: 'Стёб' },
    {name: 'Стихи' },
    {name: 'Ужасы' },
    {name: 'Учебные заведения' },
    {name: 'Фантастика' },
    {name: 'Философия' },
    {name: 'Флафф' },
    {name: 'Фэнтези' },
    {name: 'Эксперимент' },
    {name: 'Экшн (action)' },
    {name: 'Юмор' }
  ]
}

import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

class AutocompleteExample extends Component {
  state = {
      value: 0,
    };

    handleChange = (event, value) => {
      this.setState({ value });
    };

    handleChangeIndex = index => {
      this.setState({ value: index });
    };
    onClikb =()=> {
      console.log("onclick");
      this.setState({ value: 1 });
    }
    render() {

      return (
        <div>
          <AppBar position="static" color="default">
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              fullWidth
            >
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>
          </AppBar>
          <SwipeableViews

            index={this.state.value}
            onChangeIndex={this.handleChangeIndex}
          >
            <TabContainer>
              Item One
              <Button

              onClick={this.onClikb}
                variant="raised"
                color="primary"
              >
                Primary
              </Button>
            </TabContainer>
            <TabContainer>Item Two</TabContainer>
            <TabContainer>Item Three</TabContainer>
          </SwipeableViews>
        </div>
      );
    }

}

export default AutocompleteExample;
