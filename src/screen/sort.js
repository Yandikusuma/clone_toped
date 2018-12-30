import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';


class Sort extends Component {
	render() {
		return(
			<View style={styles.container}>
				<View style={{margin: 5, flexDirection: 'row'}}>
				  <View style={styles.viewIconTop}>
					  <Image 
					  	source={require('../../image/tas.png')}
					  	style={styles.iconTop}
					  />
					  <Text style={styles.text}>Kategori</Text>
					</View>
					<View style={styles.viewIconTop}>
					  <Image 
					  	source={require('../../image/coin.jpeg')}
					  	style={styles.iconTop}
					  />
					  <Text style={styles.text}>Angsuran Kredit</Text>
					</View>
					<View style={styles.viewIconTop}>
					  <Image 
					  	source={require('../../image/lampu.jpeg')}
					  	style={styles.iconTop}
					  />
					  <Text style={styles.text}>Listrik PLN</Text>
					</View>
					<View style={styles.viewIconTop}>
					  <Image 
					  	source={require('../../image/pinjaman.png')}
					  	style={styles.iconTop}
					  />
					  <Text style={styles.text}>Pinjaman Modal</Text>
					</View>
					<View style={styles.viewIconTop}>
					  <Image 
					  	source={require('../../image/me.jpeg')}
					  	style={styles.iconTop}
					  />
					  <Text style={styles.text}>Afilisi</Text>
					</View>

				</View>
				<View style={{margin: 5, flexDirection: 'row'}}>
			  	<View style={styles.viewIconBottom1}>
			  	  <Image 
			  	  	source={require('../../image/benar.png')}
			  	  	style={styles.iconBottom}
			  	  />
			  	  <Text style={styles.text}>Offical Store</Text>
					</View>
					<View style={styles.viewIconBottom}>
			  	  <Image 
			  	  	source={require('../../image/hp.jpeg')}
			  	  	style={styles.iconBottom}
			  	  />
			  	  <Text style={styles.text}>Handphone & Tablet</Text>
					</View>
					<View style={styles.viewIconBottom}>
			  	  <Image 
			  	  	source={require('../../image/donasi.png')}
			  	  	style={styles.iconBottom}
			  	  />
			  	  <Text style={styles.text}>Donasi Selat Sunda</Text>
					</View>
					<View style={styles.viewIconBottom}>
			  	  <Image 
			  	  	source={require('../../image/dompet.png')}
			  	  	style={styles.iconBottom}
			  	  />
			  	  <Text style={styles.text}>Ajukan Kartu Kredit</Text>
					</View>
					<View style={styles.viewIconBottom1}>
			  	  <Image 
			  	  	source={require('../../image/dompet.png')}
			  	  	style={styles.iconBottom}
			  	  />
			  	  <Text style={styles.text}>Lainnya</Text>
			    </View>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f2f2f2'
	},
	iconTop: {
		width: 30,
		height: 30
	},
	iconBottom: {
		width: 30,
		height: 30
	},
	viewIconTop: {
		flex: 1,
		alignItems: 'center',
		marginLeft: 5,
		width: 66,
		marginTop: 5,
	},
	viewIconBottom1: {
		flex: 1,
		alignItems: 'center',
		marginLeft: 10,
		width: 50,
		marginTop: 5,
	},
	viewIconBottom: {
		flex: 1,
		alignItems: 'center',
		marginLeft: 2,
		width: 75,
		marginTop: 5,
	},
	text: {
		textAlign: 'center',
		marginTop: 10,
		fontSize: 10
	}
})


export default Sort