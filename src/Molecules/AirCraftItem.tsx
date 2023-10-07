import {View, Text, StyleSheet} from 'react-native';
import React, {FC, useState} from 'react';
// import {RadioButton} from 'react-native-paper';
import {RadioButton} from 'react-native-paper';
import Title from '../Atomes/Title';
import Dot from '../Atomes/Dot';
interface AirCraftItemProps {
  title: string;
  tailNumber: string;
  onChange: () => {};
  checkedValue: string;
}

const AirCraftItem: FC<AirCraftItemProps> = ({
  onChange,
  tailNumber,
  title,
  checkedValue,
}) => {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: checkedValue === tailNumber ? '#E6F6F9' : 'white',
        borderWidth: checkedValue === tailNumber ? 1 : 0,
      }}>
      <RadioButton
        value="first"
        status={checkedValue === tailNumber ? 'checked' : 'unchecked'}
        onPress={() => onChange(tailNumber)}
        color="#008BA5"
      />
      <Title color="#767676" text={title} />
      <Dot color={'#5B5B5B'} width={5} specialStyles={{marginLeft: 8}} />
      <Title color="#000000" text={tailNumber} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 8,
    borderColor: '#12A3BE',
    marginTop: 10,
  },
});

export default AirCraftItem;
