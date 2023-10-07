import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Platform, StatusBar, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';
import AddFlightScreen from '../Screens/AddFlightScreen';
import AppIntro from '../Screens/AppIntroScreen';
import CreateAirCraftScreen from '../Screens/CreateAirCraftScreen';
import CreatePostScreen from '../Screens/CreatePostScreen';
import ForgetPasswordScreen from '../Screens/ForgetPasswordScreen';
import LoginScreen from '../Screens/LoginScreen';
import LoginSignUpAskScreen from '../Screens/LoginSignUpAskScreen';
import MyProfileScreen from '../Screens/MyProfileScreen';
import RolesScreen from '../Screens/RolesScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import BottomBarNavigation from './BottomBarNavigation';
const SafeView = Platform.OS == 'ios' ? SafeAreaView : View;

const SCREENS = [
  {
    name: 'CreatePostScreen',
    component: CreatePostScreen,
    options: {options: {headerShown: false}},
  },
  {
    name: 'BottomBarNavigation',
    component: BottomBarNavigation,
    options: {options: {headerShown: false}},
  },

  {
    name: 'AppIntroScreen',
    component: AppIntro,
    options: {options: {headerShown: false}},
  },
  {
    name: 'LoginSignUpAskScreen',
    component: LoginSignUpAskScreen,
    options: {options: {headerShown: false}},
  },
  {
    name: 'SignUpScreen',
    component: SignUpScreen,
    options: {options: {headerShown: false}},
  },
  {
    name: 'LoginScreen',
    component: LoginScreen,
    options: {options: {headerShown: false}},
  },
  {
    name: 'ForgetPasswordScreen',
    component: ForgetPasswordScreen,
    options: {options: {headerShown: false}},
  },
  {
    name: 'CreateAirCraftScreen',
    component: CreateAirCraftScreen,
    options: {options: {headerShown: false}},
  },
  {
    name: 'AddFlightScreen',
    component: AddFlightScreen,
    options: {options: {headerShown: false}},
  },

  {
    name: 'MyProfileScreen',
    component: MyProfileScreen,
    options: {options: {headerShown: false}},
  },

  {
    name: 'RolesScreen',
    component: RolesScreen,
    options: {options: {headerShown: false}},
  },
];

enableScreens();

const {Navigator, Screen} = createNativeStackNavigator();

const AppWithNavigation = () => {
  return (
    <SafeAreaProvider>
      <SafeView style={{flex: 1}}>
        <StatusBar translucent={false} />
        <NavigationContainer>
          <Navigator>
            {SCREENS.map((screen, index) => (
              <Screen
                key={index}
                name={screen.name}
                component={screen.component}
                {...screen?.options}
              />
            ))}
          </Navigator>
        </NavigationContainer>
      </SafeView>
    </SafeAreaProvider>
  );
};

export default AppWithNavigation;
