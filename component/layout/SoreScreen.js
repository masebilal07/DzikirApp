import React from 'react';
import { Tab, Tabs, TabHeading,Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { View,TouchableOpacity,Image, Text,StyleSheet } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
// import { createStackNavigator, createAppContainer } from 'react-navigation';
import Tab1 from './SugroSoreScreen';
import Tab2 from './KubroSoreScreen';


export default class SoreScreen extends React.Component {
  constructor(props) {
    super(props);
    this.customTitles = [{title: '27'}, {title: '28'}, {title: '29'}, {title: '30'}, {title: '31'}, {title: '32'}, {title: '33'}, {title: '34'}];
    this.state = {
      status:true,
      titles:this.customTitles,
    };
  }
 
  static navigationOptions = {
    header:null
  };

 _menu = null;
 
  setMenuRef = ref => {
    this._menu = ref;
  };
 
  showMenu = () => {
    this._menu.show();
  };
  
  hideMenu = () => {
    this._menu.hide();
  };


  _hideText = () => {
     this.setState({
        status:!this.state.status,
      });

     this.hideMenu();
  }


  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1,backgroundColor:'#ecf2f5' }}>
          <Header style={{backgroundColor:'#f47e38'}} androidStatusBarColor='#e25b19'>
          <Left>
            <TouchableOpacity>
              <Icon onPress={() => navigation.goBack(null)} style={{color:'#fff'}} name='arrow-back'/>
            </TouchableOpacity>
          </Left>
          <Body>
            <Title style={styles.textHeader}>Dzikir Sore</Title>
          </Body>
          <Right>
            <Button transparent>
            <Menu
              style={styles.menuSetting}
              ref={this.setMenuRef}
              button=
              {
                <TouchableOpacity onPress={this.showMenu}>
                  <Icon style={{fontWeight:'bold', fontSize:30}} name='more' />
                </TouchableOpacity>
              }
            >
              <MenuItem
                onPress={() => this._hideText()}
              >Hidden Text</MenuItem>
              <MenuItem
                onPress={() => this._hideText()}
              >Show Text</MenuItem>
            </Menu>
            </Button>
          </Right>
        </Header>
         <Tabs>
          <Tab 
            heading="Sugro"
            tabStyle={{backgroundColor:'#f47e38'}}
            textStyle={{color: '#fff',fontSize:20,}} 
            activeTabStyle={{backgroundColor: '#ecf2f5'}} 
            activeTextStyle={{color: '#666', fontWeight: 'normal', fontFamily: 'SourceSansPro',fontWeight:'bold',fontSize:20,}}
          >
            <Tab1 status={this.state.status}/>
          </Tab>
          <Tab 
            heading="Kubro"
            tabStyle={{backgroundColor:'#f47e38'}}
            textStyle={{color: '#fff',fontSize:20,}} 
            activeTabStyle={{backgroundColor: '#ecf2f5'}} 
            activeTextStyle={{color: '#666', fontWeight: 'normal', fontFamily: 'SourceSansPro',fontWeight:'bold',fontSize:20,}}
          >
            <Tab2 status={this.state.status}/>
          </Tab>
        </Tabs>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textTab:{
    fontSize:20,
    color:'#666',
    fontWeight:'bold',
    fontFamily: 'SourceSansPro',
  },
  textHeader:{
    fontFamily: 'SourceSansPro',
    fontWeight: 'bold',
    fontSize: 20,
    marginHorizontal: 0,
    letterSpacing: 2,
    marginLeft:-20
  },
  menuSetting: {
    marginTop: 27,
    borderRadius:0
  },
});
