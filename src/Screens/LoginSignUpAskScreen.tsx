import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from '../Atomes/Icon';
import Title from '../Atomes/Title';
import CostumButton from '../Atomes/CostumButton';
import {PRIMARY_COLOR} from '../staticData/colors';

const LoginSignUpAskScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Icon
        path={require('../assets/Images/BrandSymbol.png')}
        activeColor="#A0A0A0"
        width={118}
      />
      <Title
        text="Expanding your flying horizons "
        size={32}
        weight={'800'}
        specialStyle={{textAlign: 'center', marginTop: 25}}
      />
      <CostumButton
        backgroundCOlor={PRIMARY_COLOR}
        text={'SignUp'}
        width={236}
        radius={50}
        textColor={'white'}
        specialStyle={{marginTop: 50}}
        onPress={() => navigation.navigate('SignUpScreen')}
      />
      <Title
        text="Log in"
        size={15}
        color={PRIMARY_COLOR}
        specialStyle={{marginTop: 25}}
        onPress={() => navigation.navigate('LoginScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
    paddingVertical: 50,
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
});
export default LoginSignUpAskScreen;
