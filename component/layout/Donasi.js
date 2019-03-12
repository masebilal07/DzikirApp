import React from 'react';
import {Icon,DeckSwiper,Thumbnail, Card, CardItem,Body,Text,Content, List, ListItem, Left, Right, Header, Button, Title,Container} from 'native-base';
import { View,Image, StyleSheet,TouchableOpacity,Linking,ImageBackground} from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

export default class Donasi extends React.Component {
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

  render() {
    const { navigation } = this.props;
    return (
        <View>
          <Header style={{backgroundColor:'#f47e38'}} androidStatusBarColor='#e25b19'>
            <Left>
              <TouchableOpacity>
              <Icon onPress={() => navigation.goBack(null)} style={{color:'#fff'}} name='arrow-back'/>
            </TouchableOpacity>
            </Left>
            <Body>
              <Title style={styles.textHeader}>Donasi</Title>
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
                  onPress={ ()=> 
                    Linking.openURL('https://api.whatsapp.com/send?phone=6281548418278&text=Assalamualaikum%20ada%20yang%20bisa%20kami%20bantu !!')
                  }
                >Hubungi Kami</MenuItem>
              </Menu>
                
              </Button>
            </Right>
          </Header>
          <View>
          <Card>
            <CardItem cardBody>
              <Image
              style={{width: 200, height: 350}}
              source={require('../images/111.jpg')}
            />
            </CardItem>
          </Card>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  menuSetting: {
    marginTop: 27,
    borderRadius:0
  },
  textyuk: {
    marginLeft:20,
    marginTop:5,
    fontSize:30,
    fontStyle:'italic',
    color:'#333',
  },
  textdonasi: {
    marginLeft:20,
    fontSize:35,
    fontWeight:'bold',
    color:'#f47e38',
  },
});