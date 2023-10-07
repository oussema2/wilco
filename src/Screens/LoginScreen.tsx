import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Title from '../Atomes/Title';
import Input from '../Molecules/Input';
import CostumButton from '../Atomes/CostumButton';
import {PRIMARY_COLOR} from '../staticData/colors';
import InputWithIcon from '../Molecules/InputWithIcon';

const LoginScreen = ({navigation}) => {
  const isDisabled = false;
  const [showPassword, setShowPassword] = useState(true);
  const [loginData, setLoginData] = useState({email: '', password: ''});
  console.log(loginData);
  return (
    <View style={styles.container}>
      <Title text="Log in" size={32} weight={'800'} />
      <View style={styles.formContainer}>
        <Input
          specialStyle={{marginBottom: 35}}
          label="Email *"
          placeHolder="e.g. wileypost@gmail.com"
          onChangeInput={text => setLoginData({...loginData, email: text})}
        />
        <InputWithIcon
          label="Password"
          onChangeInput={text => setLoginData({...loginData, password: text})}
          iconAction={() => setShowPassword(!showPassword)}
          isSecure={showPassword}
          placeHolder="8 character minimum"
          icon={
            showPassword
              ? require('../assets/Images/eye-slash.png')
              : require('../assets/Images/eye.png')
          }
        />
      </View>
      <View style={styles.buttonContainer}>
        <CostumButton
          onPress={() => navigation.navigate('BottomBarNavigation')}
          textColor={isDisabled ? '#A0A0A0' : 'white'}
          disable={isDisabled}
          text={'Log In'}
          backgroundCOlor={isDisabled ? '#E3E3E3' : PRIMARY_COLOR}
          width={236}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgetPasswordScreen')}
          style={styles.forgetPasswordContainer}>
          <Title
            text="Forgot Password"
            size={16}
            weight="600"
            color={PRIMARY_COLOR}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
    position: 'relative',
  },
  formContainer: {
    marginTop: 50,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 50,
  },
  forgetPasswordContainer: {
    padding: 20,
  },
});

export default LoginScreen;
