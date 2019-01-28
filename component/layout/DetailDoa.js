import React from 'react';
import {Icon, Card, CardItem,Body,Text,Content, List, ListItem, Left, Right, Header, Button, Title} from 'native-base';
import { View,TouchableHighlight,Image, StyleSheet,ScrollView,TouchableOpacity,Clipboard} from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import DataDoa from '../../data/DataDoa';

export default class DetailDoa extends React.Component {
    static navigationOptions = {
      // headerTitle: 'Detail Doa',
      // headerTitleStyle: {
      //   fontFamily: 'SourceSansPro',
      //   fontWeight: 'bold',
      //   // fontStyle: 'italic',
      //   fontSize: 20,
      //   marginHorizontal: 0,
      //   flex: 1,
      //   letterSpacing: 2,
      // },
      // headerStyle: {
      //   backgroundColor: '#00dfbe'
      // },
      // headerTintColor: '#FFFFFF',
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
    
    id = this.props.navigation.getParam('itemId');
    index = parseInt(this.id) - 1;
    data = DataDoa[this.index];
    text = this.data.judul +'\n \n'+ this.data.arab +'\n \n'+ this.data.terjemah +'\n  \n' + this.data.sumber;
    copy() {
      Clipboard.setString(this.text);
      alert('Doa Tersalin Ke Clipboard!');

      this.hideMenu();
    }

render() {
    const { navigation } = this.props;
    const index = parseInt(this.id) - 1;  
      return (
        <View style={{flex:1, backgroundColor:'#ecf2f5'}}>
          <Header style={{backgroundColor:'#00dfbe'}}>
            <Left>
              <TouchableOpacity>
              <Icon onPress={() => navigation.goBack(null)} style={{color:'#fff'}} name='arrow-back'/>
            </TouchableOpacity>
            </Left>
            <Body>
              <Title style={styles.textHeader}>Detail Doa</Title>
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
                <MenuItem onPress={() => this.copy()}>Salin</MenuItem>
              </Menu>
                
              </Button>
            </Right>
          </Header>
          <ScrollView style={{flex:2, margin:15}}>
              <View style={{backgroundColor:'#ffffff', marginTop:10, padding:12}}>
                <Text style={styles.textJudul}>{DataDoa[index].judul}</Text>
                <Text style={styles.textArab}>{DataDoa[index].arab}</Text>
                <Text style={styles.textArabLatin}>{DataDoa[index].arablatin}</Text>
                <Text style={styles.textTerjemah}>{DataDoa[index].terjemah}</Text>
                 <Text style={styles.sumber}>{DataDoa[index].sumber}</Text>
              </View>
          </ScrollView>
        </View>
      );
    }
  }


const styles = StyleSheet.create({
 Icon: {
  color:'#666666'
 },
 copy: {
  fontFamily: 'SourceSansPro',
  fontSize: 17,
  textAlign:'center',
  // backgroundColor:'#00dfbe',
  backgroundColor:'#ecf2f5',
  padding:5,
  justifyContent:'center',
  marginTop:15,
  borderRadius: 10,
},
textCopy: {
  color:'#666666',
  fontSize:12
},
 textJudul: {
    padding:7,
    fontSize:17,
    fontFamily: 'SourceSansPro',
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#666666'
 },
 textArab: {
    fontSize:35,
    fontFamily: 'lotus-linotype-light',
    color:'#333333',
    marginTop:5
 },
 textArabLatin: {
    lineHeight:20,
    marginTop: 10,
    fontStyle:'italic',
    color:'#666666',
    fontFamily: 'SourceSansPro',
    fontSize: 15,
 },
 textTerjemah: {
    lineHeight:20,
    fontFamily: 'SourceSans',
    marginTop:10,
    fontSize:15,
    color:'#333333',
    paddingBottom: 10
 },
 sumber: {
    marginTop:20,
    fontSize:15,
    fontStyle:'italic'
 },
 menuSetting: {
    marginTop: 27,
    borderRadius:0
  },
})