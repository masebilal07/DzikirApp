import React from 'react';
import {Icon, Card, CardItem,Body,Text,Content, List, ListItem, Left, Right, Button} from 'native-base';
import { View,TouchableHighlight,Image,TouchableOpacity, StyleSheet } from 'react-native';
// import { createStackNavigator, createAppContainer } from 'react-navigation';
import ListDoa from '../../data/ListDoa.json';

export default class DoaScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Daftar Doa',
    headerStyle: {
      backgroundColor: '#00dfbe'
    },
    headerTitleStyle: {
        fontFamily: 'SourceSansPro',
        fontWeight: 'bold',
        fontSize: 20,
        marginHorizontal: 0,
        flex: 1,
        letterSpacing: 2,
      },
    headerTintColor: '#FFFFFF',
    headerRight: (
        null
      ),
  };
  
    render() {
      const { navigation } = this.props;
  
      return (
        <View style={{flex:1, backgroundColor:'#ffffff'}}>
          <View style={{flex:2, margin:7}}>
            <Content>
              {ListDoa.map((data, index) => (
                <ListItem key={index} thumbnail
                  onPress={() => this.props.navigation.navigate('Detail', {
                    itemId: data.id,
                   })}
                >
                  <Left>
                    <Text style={{fontSize:27, color:'#333'}}>{data.id}</Text>
                  </Left>
                  <Body>
                    <Text style={styles.listjudul}>{data.judul}</Text>
                    <Text style={styles.listconten}>Doa Harian - {data.id}</Text>
                  </Body>
                  <Right>
                      <Icon style={{color:'#333'}} name="arrow-forward" />
                  </Right>
                </ListItem>
              ))}
            </Content>
          </View>
        </View>
      );
    }
  }


  const styles = StyleSheet.create({
    listconten: {
      fontSize:11,
      letterSpacing: 1,
      color:'#666'
    },
    listjudul: {
      fontFamily: 'SourceSansPro',
      fontSize: 17,
      fontWeight: 'bold',
      flex: 1,
      color: '#333',
      letterSpacing: 1,
    }
  })