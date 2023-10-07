import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from '../Atomes/Icon';
import FeedScreen from '../Screens/FeedScreen';
import Index from '../Screens/Members/Index';
import NotificationScreen from '../Screens/NotificationScreen';
import React from 'react';
import MyProfileScreen from '../Screens/MyProfileScreen';
import CreatePostScreen from '../Screens/CreatePostScreen';
import TabBar from '../Molecules/TabBar';

const SCREENS = [
  {
    name: 'FeedScreen',
    component: FeedScreen,
    icon: require('../assets/BottomTabIcons/addPost.png'),
  },
  {
    name: 'IndexMemberScreen',
    component: Index,
    icon: require('../assets/BottomTabIcons/addPost.png'),
  },
  {
    name: 'NotificationScreen',
    component: NotificationScreen,
    icon: require('../assets/BottomTabIcons/addPost.png'),
  },
];

const SCREENS_HAVE_ICONS = [
  {
    name: 'FeedScreen',
    component: FeedScreen,
    icon: require('../assets/BottomTabIcons/home.png'),
    iconSize: 30,
    Index: 0,
  },
  {
    name: 'IndexMemberScreen',
    component: Index,
    icon: require('../assets/BottomTabIcons/member.png'),
    iconSize: 30,
    Index: 1,
  },
  {
    name: 'CreatePostScreen',
    component: CreatePostScreen,
    icon: require('../assets/BottomTabIcons/addPost.png'),
    iconSize: 60,
  },
  {
    name: 'NotificationScreen',
    component: NotificationScreen,
    icon: require('../assets/BottomTabIcons/notification.png'),
    iconSize: 30,
    Index: 2,
  },
  {
    name: 'MyProfileScreen',
    component: MyProfileScreen,
    icon: require('../assets/BottomTabIcons/user.png'),
    iconSize: 30,
  },
];

const {Navigator, Screen} = createBottomTabNavigator();

export default () => {
  return (
    <Navigator
      tabBar={props => <TabBar screens={SCREENS_HAVE_ICONS} {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          //bottom: 2,
          //left: 10,
          //right: 10,
          //borderRadius: 7,
          flexDirection: 'row',
          flex: 1,
          justifyContent: 'space-around',
          alignItems: 'center',
          //backgroundColor: 'red',
        },
      }}>
      {SCREENS.map((screen, index) => (
        <Screen key={index} name={screen.name} component={screen.component} />
      ))}
    </Navigator>
  );
};
