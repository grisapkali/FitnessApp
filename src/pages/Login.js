import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headBackground} />
        <View>
          <Text style ={styles.logo}>TAHRİBAT</Text>
          <Text style ={styles.logoDescription}>Antrenman & Beslenme</Text>
        </View>
        <ScrollView>
          <View style={styles.loginArea}>
          <Text>Deneme</Text>
          <Text>Deneme</Text>
          <Text>Deneme</Text>
          <Text>Deneme</Text>
          <Text>Deneme</Text>
          <Text>Deneme</Text>

          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
		paddingVertical: 80
  },
	headBackground: {
  	position: 'absolute',
		top: 0,
		left: 0,
		height: 250,
		width: '100%',
		backgroundColor: '#1572de'
	},
	logo: {
  	textAlign: 'center',
		fontSize: 40,
		fontWeight: 'bold',
		color: '#f2f2f2'
	},
	logoDescription: {
  	textAlign: 'center',
		color: '#f2f2f2'
	},loginArea: {
  	marginHorizontal: 40,
		marginVertical: 40,
		backgroundColor: '#fff',
		padding: 20,
		borderRadius: 5,

		shadowColor: 'black',
		shadowOpacity: 1,
		shadowRadius: 3,
		shadowOffset: {
  		width:0,
			height: 2
    },
    elevation:8
  }

});