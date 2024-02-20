import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import Logo from './app/components/Logo';
import List from './app/components/List';
import NewTask from './app/components/NewTask';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Logo></Logo>
      </View>

      <View style={styles.listContainer}>
        <List />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor:"rgb(237, 237, 237)",
  },
  logo: {
  },
  listContainer: {
    paddingBottom: 15,
  },
});

export default App;
