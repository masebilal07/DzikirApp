import React, { Component } from 'react';

import { StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity,StatusBar } from 'react-native';
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
        backgroundColor: '#f47e38'
      },
      headerTintColor: '#FFFFFF',
  };

  render() {
    return (
      <View style={{flex:1, backgroundColor:'#ecf2f5'}}>
      <StatusBar backgroundColor='#f47e38' barStyle='light-content' />
        <ScrollView>
          <View style={styles.wrapper}>
            <Image
              style={styles.logo}
              source={require('../images/iconandroid.png')}
            />
            <Text style={[styles.mainTitle, styles.text]}>Dzikir Pagi & Petang</Text>
            <Text style={[styles.subTitle, styles.text]}>by Pondok Qur'an HomeStay</Text>
            <Text style={[styles.paragraph, styles.text]}>
              Pemuda adalah asset berharga bagi setiap bangsa. Di Qur’an Homestay para pelajar dari kalangan Dhuafa khususnya dibina menjadi bibit-bibit unggul yang memiliki bekal alqur’an, bekal kehidupan (life skill) dan berprestasi. Kehidupan layaknya pondok dengan bingkai keseharian penuh disiplin menjadi tempat yang nyaman untuk mereka bersama dengan alqur’an, mengukir prestasi, berkonstribusi untuk masyarakat, agama dan negara.
            </Text>
            <View style={styles.contact}>
              <Text style={[styles.contactHeader, styles.text]}>Tujuan</Text>
              <View style={styles.contactItem}>
                <Icon name="navigate-next" style={styles.contactIcon}/>
                <Text style={[styles.contactText, styles.text]}>Membentuk santri yang memiliki bacaan qur’an yang baik dan hafal minimal 5 juz per tahun</Text>
                <Icon name="navigate-next" style={styles.contactIcon}/>
                <Text style={[styles.contactText, styles.text]}>Membentuk santri yang memiliki sikap (attitude) yang baik dalam keseharian</Text>
                <Icon name="navigate-next" style={styles.contactIcon}/>
                <Text style={[styles.contactText, styles.text]}>Menyiapkan santri yang terbekali oleh keterampilan hidup yang mendasar</Text>
                <Icon name="navigate-next" style={styles.contactIcon}/>
                <Text style={[styles.contactText, styles.text]}>Memberikan dasar pendidikan formal kepada santri</Text>
              </View>
            </View>
            <View style={styles.contact}>
              <Text style={[styles.contactHeader, styles.text]}>Sasaran</Text>
              <View style={styles.contactItem}>
                <Icon name="navigate-next" style={styles.contactIcon}/>
                <Text style={[styles.contactText, styles.text]}>Santri Mukim dari Kalangan Dhuafa</Text>
                <Icon name="navigate-next" style={styles.contactIcon}/>
                <Text style={[styles.contactText, styles.text]}>Santri Kalong dari lingkungan sekitar</Text>
              </View>
            </View>
            <View style={styles.contact}>
              <Text style={[styles.contactHeader, styles.text]}>Jenis Kegiatan</Text>
              <View style={styles.contactItem}>
                <Icon name="navigate-next" style={styles.contactIcon}/>
                <Text style={[styles.contactText, styles.text]}>Tahsinul Qur’an, Tahfidzul Qur’an, Daily Activity Control, Pelatihan, Sekolah Formal.</Text>
              </View>
            </View>
            <View style={styles.contact}>
              <Text style={[styles.contactHeader, styles.text]}>Perangkat</Text>
              <View style={styles.contactItem}>
                <Text style={[styles.contactText, styles.text]}>Rumah standar losmen, Tenaga terlatih.</Text>
              </View>
            </View>

            <Text style={[styles.paragraph, styles.text]}>
              Aplikasi ini di buat oleh alumni santri Pondok Qur'an HomeStay Klaten
            </Text>
            <View style={styles.contact}>
              <Text style={[styles.contactHeader, styles.text]}>Leader</Text>
              <View style={styles.contactItem}>
                <Icon name="navigate-next" style={styles.contactIcon}/>
                <Text style={[styles.contactText, styles.text]}>Ust Maryanto</Text>
              </View>
            </View>
            <View style={styles.contact}>
              <Text style={[styles.contactHeader, styles.text]}>Developers</Text>
              <View style={styles.contactItem}>
                <Icon name="navigate-next" style={styles.contactIcon}/>
                <Text style={[styles.contactText, styles.text]}>Bilal</Text>
              </View>
            </View>
            <View style={styles.contact}>
              <Text style={[styles.contactHeader, styles.text]}>Pondok Qur'an HomeStay</Text>
              <View style={styles.contactItem}>
                <Icon name="mail-outline" style={styles.contactIcon}/>
                <Text style={[styles.contactText, styles.text]}>pondokquranhomestay@gmail.com</Text>
              </View>
              <View style={styles.contactItem}>
                <Icon name="public" style={styles.contactIcon}/>
                <Text style={[styles.contactText, styles.text]}>http://quranhomestay.com/</Text>
              </View>
              <View style={styles.contactItem}>
                <Icon name="phone-iphone" style={styles.contactIcon}/>
                <Text style={[styles.contactText, styles.text]}>081548418278 (Ustadz Maryanto)</Text>
              </View>
              <View style={styles.contactItem}>
                <Icon name="phone-iphone" style={styles.contactIcon}/>
                <Text style={[styles.contactText, styles.text]}>085743744345 (Ustadzah Fahmi)</Text>
              </View>
              <View style={styles.contactItem}>
                <Icon name="home" style={styles.contactIcon}/>
                <Text style={[styles.contactText, styles.text]}>Bareng Kidul, Bareng, Klaten Tengah, Kabupaten Klaten, Jawa Tengah 57414</Text>
              </View>
            </View>
            <View style={styles.vendorWrapper}>
              <View style={styles.vendor}>
                <Image
                  style={[styles.vendorImage, {height: 37}]}
                  source={require('../images/footerabout.png')}
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
  paragraph: {
    fontSize: 15,
    fontStyle: 'italic',
    marginBottom: 10,
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
    width: 300,
    alignSelf: 'center',
  },
});

export default About;
