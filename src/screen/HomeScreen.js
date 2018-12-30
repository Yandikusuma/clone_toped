import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import NavBar from '../component/navBar';
import Home from './home';
import Sort from './sort';
import Discount from './discount';
import Hemat from './hemat';


export default class HomeScreen extends Component{
  render() {
    return (
      <View style={styles.container}>
        <NavBar />
        <ScrollView>
          <Home />
          <Sort />
          <Discount />
          <Hemat />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});