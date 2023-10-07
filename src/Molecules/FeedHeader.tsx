import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from '../Atomes/Icon';
import {LogoSVG} from '../assets/SVG/LogoSVG';
import {SvgXml} from 'react-native-svg';
import SvgIcon from '../Atomes/SvgIcon';
import {searchSVG} from '../assets/SVG/searchSVG';
import {slidersSVG} from '../assets/SVG/sliders-h';
import Title from '../Atomes/Title';
import {PRIMARY_COLOR} from '../staticData/colors';
const FeedHeader = () => {
  const test = 'feed';
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.leftSideContainer}>
          <SvgXml xml={LogoSVG} width={'100%'} height={50} />
        </View>
        <View style={styles.rightSideContainer}>
          <SvgIcon
            specialStyle={{marginRight: 10}}
            svg={searchSVG}
            width={24}
            height={24}
          />
          <SvgIcon svg={slidersSVG} width={24} height={24} />
        </View>
      </View>
      <View
        style={{
          ...styles.bottomContainer,
        }}>
        <TouchableOpacity
          style={{
            ...styles.sideButtonContainer,
            borderBottomColor: PRIMARY_COLOR,
            borderBottomWidth: test ? 4 : 0,
          }}>
          <Title
            size={14}
            weight={'600'}
            color={test === 'feed' ? PRIMARY_COLOR : 'black'}
            text="My feed"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sideButtonContainer}>
          <Title
            size={14}
            weight={'600'}
            color={test === 'all feed' ? PRIMARY_COLOR : 'black'}
            text="All Posts"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#C7F7FF',
  },
  topContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#C7F7FF',
    padding: 20,
  },
  leftSideContainer: {
    flex: 1,
  },
  rightSideContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  bottomContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  sideButtonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    margin: 5,
    backgroundColor: 'white',
    height: 41,
  },
});

export default FeedHeader;
