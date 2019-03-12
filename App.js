import React, {Component} from 'react';
import {Container, Header, Left, Body, Right, Button, Icon, Title,ScrollView } from 'native-base';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { View,TouchableOpacity,Image,StyleSheet, Text, Linking,Dimensions } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import PagiScreen from './component/layout/PagiScreen';
import SoreScreen from './component/layout/SoreScreen';
import DoaScreen from './component/layout/DoaScreen';
import SugroPagiScreen from './component/layout/SugroPagiScreen';
import SugroSoreScreen from './component/layout/SugroSoreScreen';
import KubroPagiScreen from './component/layout/KubroPagiScreen';
import KubroSoreScreen from './component/layout/KubroSoreScreen';
import DetailDoa from './component/layout/DetailDoa';
import About from './component/layout/About';
import Donasi from './component/layout/Donasi';


class HomeScreen extends Component {

  static navigationOptions = {
    header:null
  };

  constructor(props) {
    super(props);
  
    this.state = {
      rotate: true,
    };
  }

  onLayout(e) {
    const {width, height} = Dimensions.get('window');
    this.setState({
      rotate: (height > width),
    });
  }

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
// warna dasar - 162e40
  
  render() {
    return (
      <View onLayout={this.onLayout.bind(this)} style={{flex: 1,backgroundColor:'#ecf2f5' }}>
        <Header style={{backgroundColor:'#f47e38'}} androidStatusBarColor='#e25b19'>
          <Left>
            <Button transparent>
            <Menu
              style={styles.menuSetting}
              ref={this.setMenuRef}
              button=
              {
                <TouchableOpacity onPress={this.showMenu}>
                  <Icon style={{fontWeight:'bold', fontSize:30}} name='menu' />
                </TouchableOpacity>
              }
            >
              <MenuItem 
                onPress={() => {
                  this.props.navigation.navigate('About');
                  this.hideMenu();
                }}
              >About</MenuItem>
              <MenuItem 
                onPress={ ()=> 
                  Linking.openURL('http://quranhomestay.com/') 
                }
              >Kunjungi Kami</MenuItem>
            </Menu>
              
            </Button>
          </Left>
          <Body>
            <Title style={styles.textHeader}>Dzikir Pagi & Petang</Title>
          </Body>
        </Header>
         <View style={[{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#ecf2f5' }, (this.state.rotate ? { flexDirection: 'column' } : { flexDirection: 'row' })]}>
        <TouchableOpacity 
          onPress={() => {
            this.props.navigation.navigate('Pagi', {
              itemId: 86,
              status: true,
            });
          }}
          underlayColor="white">
          <View>
          <Image
            style={{width: 140, height: 140}}
            source={require('./component/images/pagi.png')}
          />
          </View>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => {
            this.props.navigation.navigate('Sore', {
              itemId: 86,
            });
          }}
          underlayColor="white">
          <View>
          <Image
            style={{width: 140, height: 140}}
            source={require('./component/images/sore.png')}
          />
          </View>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => {
            this.props.navigation.navigate('Doa', {
              itemId: 86,
            });
          }}
          underlayColor="white">
          <View>
          <Image
            style={{width: 140, height: 140}}
            source={require('./component/images/doa.png')}
          />
          </View>
        </TouchableOpacity>
      </View>
      </View>
    );
  }
}


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Pagi: PagiScreen,
    Sore: SoreScreen,
    Doa: DoaScreen,
    Sugropagi: SugroPagiScreen,
    Sugrosore: SugroSoreScreen,
    Kubropagi: KubroPagiScreen,
    Kubrosore: KubroSoreScreen,
    Detail: DetailDoa,
    About: About,
    Donasi:Donasi,
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  menuSetting: {
    marginTop: 27,
    borderRadius:0
  },
  textHeader:{
    fontFamily: 'SourceSansPro',
    fontWeight: 'bold',
    fontSize: 20,
    marginHorizontal: 0,
    letterSpacing: 2,
    marginLeft:-40
  }
});