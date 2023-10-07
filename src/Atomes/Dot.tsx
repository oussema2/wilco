import {View, Text, StyleSheet} from 'react-native';
import React, {FC} from 'react';

interface DotProps {
  color: String;
  specialStyles: {};
  width?: number;
}

const Dot: FC<DotProps> = ({color, specialStyles, width}) => {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: color,
        width: width ? width : 10,
        height: width ? width : 10,
        ...specialStyles,
      }}></View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    marginHorizontal: 5,
  },
});

export default Dot;
