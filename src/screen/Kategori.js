import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import NavBar from '../component/navBar'


class KategoriScreen extends Component {
	render(){
		return(
			<View style={styles.container}>
			  <NavBar />
				<ScrollView>
					<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
					  <View style={{flexDirection: 'row', flex: 1}}>
					    <View style={styles.imageTop}>
					    	<Image 
					    		source={require('../../image/olshop1.jpg')}
					    		style={{width: 250, height: 150}}
					    	/>
					    </View>
					    <View  style={styles.imageTop}>
					    	<Image 
					    		source={require('../../image/olshop2.jpg')}
					    		style={{width: 250, height: 150}}
					    	/>
					    </View>
					    <View style={styles.imageTop}>
					    	<Image 
					    		source={require('../../image/olshop3.png')}
					    		style={{width: 250, height: 150}}
					    	/>
							</View>
							<View style={styles.imageTop}>
					    	<Image 
					    		source={require('../../image/toko.png')}
					    		style={{width: 250, height: 150}}
					    	/>
						  </View>
						</View>
					</ScrollView>
					<View style={{
						flex: 1, 
						borderBottomWidth: 2, 
						borderTopWidth: 2, 
						borderColor: '#cccccc'
					  }}
					>
						<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
							<View style={{flexDirection: 'row'}}>
								<Image 
									source={require('../../image/me.jpeg')}
									style={{width: 20, height: 20}}
								/>
								<View>
									<Text style={{color: '#000', fontWeight: 'bold'}}>Bidenbuy</Text>
								  <Text>Kota Banjar</Text>									
								</View>
							</View>
							<View style={{
								flexDirection: 'row', 
								marginTop: 10, 
								backgroundColor: 'green', 
								marginRight: 5, 
								padding: 5,
								borderRadius: 5
							}}
							>
								<Text style={{color: '#fff'}}>+</Text>
								<Text style={{color: '#fff'}}>Follow</Text>
							</View>
						</View>
						<View style={{flexDirection: 'row', marginLeft: 10, marginTop: 10, marginBottom: 10}}>
							<View style={{flex: 1}}>
								<Image 
									source={require('../../image/baju_anak.jpeg')}
									style={{width: 100, height: 150}}
								/>
							</View>
							<View style={{flex: 1}}>
								<Image 
									source={require('../../image/baju_anak.jpeg')}
									style={{width: 100, height: 150}}
								/>
							</View>
							<View style={{flex: 1}}>
								<Image 
									source={require('../../image/baju_anak.jpeg')}
									style={{width: 100, height: 150}}
								/>
							</View>
						</View>
					</View>
					<View style={{
						flex: 1, 
						borderBottomWidth: 2, 
						borderTopWidth: 2, 
						borderColor: '#cccccc',
						marginTop: 20
					  }}
					>
						<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
							<View style={{flexDirection: 'row'}}>
								<Image 
									source={require('../../image/celana.jpg')}
									style={{width: 20, height: 20}}
								/>
								<View>
									<Text style={{color: '#000', fontWeight: 'bold'}}>Celana Chino pria</Text>
								  <Text>Kota Bali</Text>									
								</View>
							</View>
							<View style={{
								flexDirection: 'row', 
								marginTop: 10, 
								backgroundColor: 'green', 
								marginRight: 5, 
								padding: 5,
								borderRadius: 5
							}}
							>
								<Text style={{color: '#fff'}}>+</Text>
								<Text style={{color: '#fff'}}>Follow</Text>
							</View>
						</View>
						<View style={{flexDirection: 'row', marginLeft: 10, marginTop: 10, marginBottom: 10}}>
							<View style={{flex: 1}}>
								<Image 
									source={require('../../image/celana.jpg')}
									style={{width: 100, height: 150}}
								/>
							</View>
							<View style={{flex: 1}}>
								<Image 
									source={require('../../image/celana.jpg')}
									style={{width: 100, height: 150}}
								/>
							</View>
							<View style={{flex: 1}}>
								<Image 
									source={require('../../image/celana.jpg')}
									style={{width: 100, height: 150}}
								/>
							</View>
						</View>
					</View>
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	imageTop: {
		marginLeft: 10,
		marginBottom: 20,
		marginTop: 20
	}
})

export default KategoriScreen