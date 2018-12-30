import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';



class NavBar extends Component{
	render(){
		return(
			<View style={styles.container}>
				<View style={styles.viewNavBar}>
					<Image 
						source={require('../../image/QRCode.png')}
						style={{width: 25, height: 25}}
					/>
					<View style={styles.viewInput}>
						<Image 
							source={require('../../image/sr.png')}
						  style={{width: 20, height: 20}}							
						/>
						<TextInput 
							placeholder="Cari di Tokopedia"
							style={{paddingLeft: 10, fontSize: 15, flex: 1}}
						/>
					</View>
					<Image 
						source={require('../../image/love.png')}
						style={{width: 25, height: 25,  marginRight: 10}}
					/>
					<Image 
						source={require('../../image/bell.png')}
						style={{width: 25, height: 25}}
					/>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		borderBottomWidth: 2,
		borderColor: '#b3b3b3'
	},
	viewNavBar: {
		flex: 1,
		flexDirection: 'row',
		paddingHorizontal: 10,
		alignItems: 'center',
		backgroundColor: '#fff'

	},
	viewInput: {
		flex: 1,
		marginVertical: 5,
		flexDirection: 'row',
		marginLeft: 20,
		backgroundColor: '#e6e6e6',
		marginRight: 10,
		alignItems: 'center',
		borderRadius: 10,
		paddingLeft: 10
	}
})

export default NavBar;