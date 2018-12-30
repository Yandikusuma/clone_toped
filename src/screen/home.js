import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';


class Home extends Component{
	render(){
		return(
			<View style={styles.container}>
				<View style={styles.viewIcon}>
					<View style={{flex: 1, flexDirection: 'row', borderRightWidth: 1, borderColor: '#cccccc'}}>
					 <Image 
						 source={require('../../image/ovo.jpeg')}
						 style={{width: 25, height: 25, marginHorizontal: 10, marginVertical: 8 }}
					 />
					 <View>
						<Text>OVO</Text>
						<Text style={{color: 'green'}}>Aktivasi</Text>
					 </View>
					</View>
					<View style={{flex: 1, flexDirection: 'row'}}>
						<Image 
							source={require('../../image/telur.png')}
							style={{width: 25, height: 35, marginHorizontal: 15, marginVertical: 8 }}
						/>
						<View>
							<Text style={{color: '#a6a6a6'}}>TokoPoints</Text>
							<Text style={{color: '#000000'}}>0 Points</Text>
						</View>
					</View>
				</View>
				<View>
					<Image 
						source={require('../../image/toko.png')}
						style={{width: '100%', height: 180}}
					/>
					<View style={{
						position: 'absolute', 
						bottom: 0, 
						right: 0, 
						backgroundColor: '#008000', 
						borderRadius: 5}}
					>
					  <Text style={{color: '#fff', padding: 5}}>Lihat Semua Promo</Text>
					</View>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff'
	},
	viewIcon: {
		flexDirection: 'row',
		paddingVertical: 10
	}
})

export default Home