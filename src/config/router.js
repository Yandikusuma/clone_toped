import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'
import KeranjangScreen from '../screen/Keranjang'
import HomeScreen from '../screen/HomeScreen'
import FeedScreen from '../screen/Feed'
import InboxScreen from '../screen/Inbox'
import AkunScreen from '../screen/Akun'
import KategoriScreen from '../screen/Kategori'



const Tabs = createBottomTabNavigator({
	Home: {
		screen: HomeScreen,
		navigationOptions: {
			tabBarLabel: 'Home',
			tabBarIcon: ({ tintColor }) => <Icon name="ios-home" size={30} color={tintColor} />
		}
	},
	Feed: {
		screen: KategoriScreen,
		navigationOptions: {
			tabBarLabel: 'Feed',
			tabBarIcon: ({ tintColor }) => <Icon name="ios-paper" size={30} color={tintColor} />
		}
		
	},
	Inbox: {
		screen: InboxScreen,
		navigationOptions: {
			tabBarLabel: 'Inbox',
			tabBarIcon: ({ tintColor }) => <Icon name="ios-mail" size={30} color={tintColor} />
		}
		
	},
	Keranjang: {
		screen: KeranjangScreen,
		navigationOptions: {
			tabBarLabel: 'Keranjang',
			tabBarIcon: ({ tintColor }) => <Icon name="ios-basket" size={30} color={tintColor} />
		}
		
	},
	Akun: {
		screen: AkunScreen,
		navigationOptions: {
			tabBarLabel: 'Akun',
			tabBarIcon: ({ tintColor }) => <Icon name="ios-contact" size={30} color={tintColor} />
		}
		
	},
})


export default Tabs