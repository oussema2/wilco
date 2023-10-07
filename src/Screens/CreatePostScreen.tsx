import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import React, {useState} from 'react';
import Title from '../Atomes/Title';
import {PRIMARY_COLOR} from '../staticData/colors';
import Input from '../Molecules/Input';
import CreatePostOptionCard from '../Molecules/CreatePostOptionCard';
import {imagesSVG} from '../assets/SVG/imagesSVG';
import {planeDepartureSVG} from '../assets/SVG/planeDepartureSVG';
import {handsHelpingSVG} from '../assets/SVG/handsHelpingSVG';
import ShareFlightPage from '../Pages/ShareFlightPage';
import {observer} from 'mobx-react';
import {PostStateInstance} from '../MobX/PostState';

const CreatePostScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.createPostHeader}>
        <Title text="Create post" size={32} weight={'800'} />
        <Title text="Cancel" size={16} weight="800" color="red" />
      </View>
      <View style={styles.createPostConainer}>
        <Input
          specialStyle={{...styles.input}}
          label="Title"
          placeHolder="Add a title"
          value={PostStateInstance.title}
          onChangeInput={text => PostStateInstance.updateTitle(text)}
        />
        <Input
          specialStyle={{...styles.input}}
          numberOfLines={8}
          label="Message / Trip notes"
          placeHolder="Add Message / Trip Notes"
          value={PostStateInstance.description}
          onChangeInput={text => PostStateInstance.updateTitle(text)}
        />
      </View>
      <View style={styles.createPostCardsContainer}>
        <CreatePostOptionCard label="Add Media" icon={imagesSVG} />
        <CreatePostOptionCard
          action={() =>
            navigation.navigate('AddFlightScreen', {
              from: 'CreatePostScreen',
            })
          }
          label="Share a Flight"
          icon={planeDepartureSVG}
        />
        <CreatePostOptionCard label="Add Community" icon={handsHelpingSVG} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    position: 'relative',
  },
  createPostHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#C7F7FF',
    padding: 20,
  },
  createPostConainer: {
    padding: 20,
  },
  input: {
    marginBottom: 40,
  },
  createPostCardsContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
export default observer(CreatePostScreen);
