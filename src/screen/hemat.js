import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';



class Hemat extends Component {
	render(){
		return(
			<View style={styles.container}>
				<View style={{margin: 5}}>
				    <Text style={{color: '#000', fontWeight: 'bold'}}>Hemat Siapkan Tahun Baru</Text>
				</View>
				<View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
				  <View style={styles.image}>
				    <Image 
				  	 source={require('../../image/casen.jpg')}
				  	 style={{width: 100, height: 100}}
				    />
				    <View style={{
              backgroundColor: 'red',
              position: 'absolute',
              right: 1,
              borderWidth: 1,
              borderColor: 'red',
              width: 40,
              height: 40,
              alignItems: 'center',
              borderRadius: 40}}
				    >
						 <Text style={{color: '#fff',  fontSize: 8, marginTop: 7}}>Dibawah</Text>
						 <Text style={{color: '#fff',  fontSize: 10}}>70K</Text>
				    </View>
					</View>
					<View style={styles.image}>
				    <Image 
				  	 source={require('../../image/drees.jpeg')}
				  	 style={{width: 100, height: 100}}
				    />
				    <View style={{
              backgroundColor: 'red',
              position: 'absolute',
              right: 1,
              borderWidth: 1,
              borderColor: 'red',
              width: 40,
              height: 40,
              alignItems: 'center',
              borderRadius: 40}}
				    >
						 <Text style={{color: '#fff',  fontSize: 8, marginTop: 7}}>Dibawah</Text>
						 <Text style={{color: '#fff',  fontSize: 10}}>150K</Text>
				    </View>
					</View>
					<View style={styles.image}>
				    <Image 
				  	 source={require('../../image/jam.jpg')}
				  	 style={{width: 100, height: 100}}
				    />
				    <View style={{
              backgroundColor: 'blue',
              position: 'absolute',
              right: 5,
              width: 40,
              height: 40,
              alignItems: 'center',
              borderRadius: 40}}
				    >
						 <Text style={{color: '#fff',  fontSize: 8, marginTop: 7}}>Dibawah</Text>
						 <Text style={{color: '#fff',  fontSize: 10}}>50K</Text>
				    </View>
				  </View>
				</View>
				<View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
				  <View style={styles.image}>
				    <Image 
				  	 source={require('../../image/tv.webp')}
				  	 style={{width: 100, height: 100}}
				    />
				    <View style={{
              backgroundColor: 'blue',
              position: 'absolute',
              right: 1,
              width: 40,
              height: 40,
              alignItems: 'center',
              borderRadius: 40}}
				    >
						 <Text style={{color: '#fff',  fontSize: 8, marginTop: 7}}>Dibawah</Text>
						 <Text style={{color: '#fff',  fontSize: 10}}>70K</Text>
				    </View>
					</View>
					<View style={styles.image}>
				    <Image 
				  	 source={require('../../image/vga.jpg')}
				  	 style={{width: 100, height: 100}}
				    />
				    <View style={{
              backgroundColor: 'red',
              position: 'absolute',
              right: 1,
              borderWidth: 1,
              borderColor: 'red',
              width: 40,
              height: 40,
              alignItems: 'center',
              borderRadius: 40}}
				    >
						 <Text style={{color: '#fff',  fontSize: 8, marginTop: 7}}>Dibawah</Text>
						 <Text style={{color: '#fff',  fontSize: 10}}>150K</Text>
				    </View>
					</View>
					<View style={styles.image}>
				    <Image 
				  	 source={require('../../image/kelambu.jpeg')}
				  	 style={{width: 100, height: 100}}
				    />
				    <View style={{
              backgroundColor: 'blue',
              position: 'absolute',
              right: 5,
              width: 40,
              height: 40,
              alignItems: 'center',
              borderRadius: 40}}
				    >
						 <Text style={{color: '#fff',  fontSize: 8, marginTop: 7}}>Dibawah</Text>
						 <Text style={{color: '#fff',  fontSize: 10}}>50K</Text>
				    </View>
				  </View>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 20,
		backgroundColor: '#fff'
	},
	image: {
		flex: 1,
		marginLeft: 15,
	}
})

export default Hemat