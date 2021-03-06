import React from 'react';
import {Icon,Content, Card, CardItem,Body,Text} from 'native-base';
import { View,TouchableHighlight,Image,StyleSheet,ScrollView } from 'react-native';
// import { createStackNavigator, createAppContainer } from 'react-navigation';
import DzikirSoreSugro from '../../data/DzikirSoreSugro';


export default class SugroSoreScreen extends React.Component {
    render() {
      const { navigation } = this.props;
  
      return (
        <View style={{flex:1, backgroundColor:'#ecf2f5'}}>
          <ScrollView style={{flex:2, margin:15}}>
            <View style={{backgroundColor:'#ffffff'}}>
              <Text style={styles.textJudul}>Dzikir Sore Sugro</Text>
            </View>
            {DzikirSoreSugro.map((sugro, index) =>
              <View key={index} style={{backgroundColor:'#ffffff', marginTop:10, padding:12}}>
                <Text style={styles.textJudul}>{sugro.headerTitle}</Text>
                <Text style={styles.textArab}>{sugro.arab}</Text>
                {
                  this.props.status ? <Text style={styles.textArabLatin}>{sugro.arablatin}</Text> : null
                }
                {
                  this.props.status ? <Text style={styles.textTerjemah}>{sugro.terjemah}k</Text> : null
                }
              </View>
            )}
          </ScrollView>
        </View>
      );
    }
  }


const styles = StyleSheet.create({
 textJudul: {
    padding:7,
    fontSize:17,
    fontFamily: 'SourceSansPro',
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#666666'
 },
 textArab: {
    fontSize:30,
    fontFamily: 'lotus-linotype-light',
    color:'#333333',
    marginTop:5
 },
 textArabLatin: {
    lineHeight:20,
    marginTop: 10,
    fontStyle:'italic',
    color:'#f47e38',
    fontFamily: 'SourceSansPro',
    fontSize: 13,
 },
 textTerjemah: {
    lineHeight:20,
    fontFamily: 'SourceSans',
    marginTop:10,
    fontSize:15,
    color:'#333333',
    paddingBottom: 10
 },
})