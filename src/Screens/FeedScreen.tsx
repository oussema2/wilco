import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useContext, useState} from 'react';
import FeedHeader from '../Molecules/FeedHeader';
import Post from '../Molecules/Post';
import Map from '../Pages/Map';
import {TabBarContext} from '../Context/TabBarContext/TabbarContext';
import {TabBarStoreInstance} from '../MobX/Tabbar';

const FeedScreen = () => {
  const [mapProps, setmapProps] = useState({display: false, pos: {}});

  const showMapAction = () => {
    TabBarStoreInstance.hide();
    setmapProps({...mapProps, display: true});
  };
  const HideMapMapAction = () => {
    TabBarStoreInstance.show();
    setmapProps({...mapProps, display: false});
  };
  return (
    <View style={styles.container}>
      {mapProps.display ? <Map hideMap={HideMapMapAction} /> : null}
      <FeedHeader />

      <ScrollView style={styles.postsContainer}>
        <Post showMap={showMapAction} />
        <Post showMap={showMapAction} />
        <Post showMap={showMapAction} />
        <Post showMap={showMapAction} />
        <Post showMap={showMapAction} />
        <Post showMap={showMapAction} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  postsContainer: {},
});
export default FeedScreen;
