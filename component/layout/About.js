import React, { Component } from 'react';

import { StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native';
import { View, Text } from "native-base";
import Icon from "react-native-vector-icons/MaterialIcons";

class About extends Component {

  static navigationOptions = {
    headerTitle: 'About',
      headerTitleStyle: {
        fontFamily: 'SourceSansPro',
        fontWeight: 'bold',
        fontSize: 20,
        marginHorizontal: 0,
        flex: 1,
        letterSpacing: 2,
      },
      headerStyle: {
        backgroundColor: '#00dfbe'
      },
      headerTintColor: '#FFFFFF',
  };

  render() {
    return (
      <View style={{flex:1, backgroundColor:'#ecf2f5'}}>
        <ScrollView>
          <View style={styles.wrapper}>
            <Image
              style={styles.logo}
              source={require('../images/iconabout.png')}
            />
            <Text style={[styles.mainTitle, styles.text]}>Dzikir Pagi & Petang</Text>
            <Text style={[styles.subTitle, styles.text]}>by Pondok Informatika Al-Madinah</Text>

            <View style={styles.contact}>
              <Text style={[styles.contactHeader, styles.text]}>Developers</Text>
              <View style={styles.contactItem}>
                <Icon name="navigate-next" style={styles.contactIcon}/>
                <Text style={[styles.contactText, styles.text]}>Bilal</Text>
              </View>
            </View>
            <View style={styles.contact}>
              <Text style={[styles.contactHeader, styles.text]}>Pondok Informatika Al-Madinah</Text>
              <View style={styles.contactItem}>
                <Icon name="mail-outline" style={styles.contactIcon}/>
                <Text style={[styles.contactText, styles.text]}>pondokitalmadinah@gmail.com</Text>
              </View>
              <View style={styles.contactItem}>
                <Icon name="public" style={styles.contactIcon}/>
                <Text style={[styles.contactText, styles.text]}>http://pondokinformatika.com</Text>
              </View>
              <View style={styles.contactItem}>
                <Icon name="phone-iphone" style={styles.contactIcon}/>
                <Text style={[styles.contactText, styles.text]}>0857 2524 9265 / 0822 5718 2656 (Irhamullah)</Text>
              </View>
              <View style={styles.contactItem}>
                <Icon name="home" style={styles.contactIcon}/>
                <Text style={[styles.contactText, styles.text]}>Jl. Raya Krapyak RT.05, Karanganyar, Wedomartani, Ngemplak, Sleman, Daerah Istimewa Yogyakarta</Text>
              </View>
            </View>
            <View style={styles.vendorWrapper}>
              <View style={styles.vendor}>
                <Image
                  style={[styles.vendorImage, {height: 25}]}
                  source={require('../images/pondok.png')}
                />
                
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: Dimensions.get('window').width - 20,
    backgroundColor: '#fff',
    alignSelf: 'center',
    paddingVertical: 40,
    paddingHorizontal: 15,
    margin: 20,
  },
  logo: {
    width: 130,
    height: 130,
    alignSelf: 'center',
    marginBottom: 10,
  },
  text: {
    color: '#2C3445',
    fontFamily: 'SourceSansPro',
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    // marginBottom: 5,
    letterSpacing: 2,
  },
  subTitle: {
    fontSize: 13,
    alignSelf: 'center',
    marginBottom: 30,
  },
  contact: {
    marginVertical: 10,
  },
  contactHeader: {
    marginBottom: 5,
    fontSize: 15,
  },
  contactItem: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  contactIcon: {
    flex: 1,
    color: '#777',
    fontSize: 14,
    paddingTop: 2,
  },
  contactText: {
    flex: 12,
    fontSize: 14,
  },
  vendorWrapper: {
    flexDirection: 'row',
    marginTop: 20,
  },
  vendorTitle: {
    fontSize: 13,
    alignSelf: 'center',
    marginBottom: 5,
  },
  vendor: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  vendorImage: {
    width: 120,
    alignSelf: 'center',
  },
});

export default About;
