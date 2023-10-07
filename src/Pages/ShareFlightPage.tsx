import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
const {width, height} = Dimensions.get('window');

const ShareFlightPage = () => {
  return (
    <View style={styles.container}>
      <Text>ShareFlightPage</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    backgroundColor: 'white',
  },
});
export default ShareFlightPage;
