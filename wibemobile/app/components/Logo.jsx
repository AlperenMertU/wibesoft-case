import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Logo = () => {
  return (
    <View style={styles.title}>
      <Text style={styles.h1}>wibesoft</Text>
      <Text  style={styles.h3}>TODO</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  title: {
    paddingTop:10,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    fontSize:20
  },
  h1:{
    color:"black",
    fontSize:40,
    fontWeight:"900"
  },
  h3:{
    color:"black",
    fontSize:20,
    fontWeight:"300"
  }
});

export default Logo