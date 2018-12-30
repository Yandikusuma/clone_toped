import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import {createAppContainer} from 'react-navigation'
import Tabs from './config/router'

const AppIndex = createAppContainer(Tabs)


export default class App extends Component {
	render(){
		return(
			<View style={{flex: 1}}>
				<AppIndex />
			</View>
		)
	}
}