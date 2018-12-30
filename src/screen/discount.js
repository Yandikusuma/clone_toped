import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


class Discount extends Component {
	render(){
		return(
			<View style={styles.container}>
			   <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
			  	<View style={styles.viewText}>
			  	  <Text style={{color: '#000', fontSize: 18, fontWeight: 'bold'}}>Flash Sale</Text>
			  	</View>
			  	<View style={{flexDirection: 'row'}}>
			  	  <View style={styles.textTime}>
			  	    <Text style={styles.textX}>10</Text>
			  	  </View>
			  	  <Text style={{color: '#ff3300', marginTop: 25}}>:</Text>
			  	  <View style={styles.textTime}>
			  	    <Text style={styles.textX}>02</Text>
			  	  </View>
			  	  <Text style={{color: '#ff3300', marginTop: 25}}>:</Text>				 
			  	  <View style={styles.textTime}>
			  	    <Text style={styles.textX}>56</Text>
			  	  </View>
			  	</View>
			  	<View style={styles.viewText}>
			  	  <Text style={{color: 'green', fontSize: 18, fontWeight: 'bold'}}>Lihat Semua</Text>
			  	</View>
				 </View>
				 <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
					 <View style={styles.image}>
						 <Image 
							 source={require('../../image/jajan.jpeg')}
							 style={{width: 100, height: 200}}
						 />
						 <View style={{
							backgroundColor: '#ffb3b3',
							position: 'absolute',
							right: 5,
							borderWidth: 1,
							borderColor: 'red',
							borderRadius: 5}}
						>
							<Text style={{color: 'red', padding: 5, fontSize: 12}}>20% OFF</Text>
						</View>
						<Text style={{textDecorationLine: 'line-through'}}>Rp 12.000</Text>
						<Text style={{color: 'red', fontSize: 17}}>Rp8.500</Text>
						 
					 </View>
					 <View style={styles.image}>
						 <Image 
							 source={require('../../image/pompa.jpg')}
							 style={{width: 100, height: 200}}
						 />
						 <View style={{
							backgroundColor: '#ffb3b3',
							position: 'absolute',
							right: 5,
							borderWidth: 1,
							borderColor: 'red',
							borderRadius: 5}}
						 >
						 	<Text style={{color: 'red', padding: 5, fontSize: 12}}>20% OFF</Text>
						 </View>
						 <Text style={{textDecorationLine: 'line-through'}}>Rp 2.000.000</Text>
						 <Text style={{color: 'red', fontSize: 17}}>Rp8.500.00</Text>
						 
					 </View>
					 <View style={styles.image}>
						 <Image 
							 source={require('../../image/jajan.jpeg')}
							 style={{width: 100, height: 200}}
						 />
						 <View style={{
							backgroundColor: '#ffb3b3',
							position: 'absolute',
							right: 5,
							borderWidth: 1,
							borderColor: 'red',
							borderRadius: 5}}
						 >
						 	<Text style={{color: 'red', padding: 5, fontSize: 12}}>20% OFF</Text>
						 </View>
						 <Text style={{textDecorationLine: 'line-through'}}>Rp 12.000</Text>
						 <Text style={{color: 'red', fontSize: 17}}>Rp8.500</Text>
						 
					 </View>
				 </View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	textTime: {
		backgroundColor: '#ff3300',
		borderRadius: 5,
		marginTop: 20,
		
	},
	textX: {
		padding: 5,
		color: '#fff'
	},
	viewText: {
		marginTop: 20,
		marginHorizontal: 10
	},
	image: {
		flex: 1,
		marginLeft: 15,
	}
})

export default Discount