import {View, Text, StyleSheet} from 'react-native';
import React, {FC, useState} from 'react';
// import {RadioButton} from 'react-native-paper';
import {RadioButton} from 'react-native-paper';
import Title from '../Atomes/Title';
import Dot from '../Atomes/Dot';
import SvgIcon from '../Atomes/SvgIcon';
import {arrowRightSVG} from '../assets/SVG/arrow-rightSVG';
interface FlightITemProps {
  from: string;
  to: string;
  departure_time: string;
  arrival_time: string;
  date: string;
  checkedValue: string;
  flightId: string;
  onChange: () => {};
}

const FlightItem: FC<FlightITemProps> = ({
  arrival_time,
  date,
  departure_time,
  from,
  to,
  checkedValue,
  flightId,
  onChange,
}) => {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: checkedValue === flightId ? '#E6F6F9' : 'white',
        borderWidth: checkedValue === flightId ? 1 : 0,
      }}>
      <View style={styles.timeCOntainer}>
        <RadioButton
          value="first"
          status={checkedValue === flightId ? 'checked' : 'unchecked'}
          onPress={() => onChange(flightId)}
          color="#008BA5"
        />
        <Title color="#000000" text={from} weight="800" />
        <SvgIcon
          specialStyle={{marginLeft: 8, marginRight: 8}}
          activeColor="black"
          width={15}
          height={15}
          svg={arrowRightSVG}
        />
        <Title weight="800" color="#000000" text={to} />
      </View>
      <View style={styles.timeCOntainer}>
        <Title color="#767676" text={departure_time} />
        <Dot
          color={'#5B5B5B'}
          width={5}
          specialStyles={{marginLeft: 8, borderRadius: 50}}
        />
        <Title color="#767676" text={arrival_time} />
      </View>
      <Title color="#767676" text={date} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 8,
    borderColor: '#12A3BE',
    marginTop: 10,
    paddingRight: 50,
  },
  timeCOntainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
});

export default FlightItem;
