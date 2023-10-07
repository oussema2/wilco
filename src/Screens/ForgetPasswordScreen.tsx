import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Title from '../Atomes/Title';
import Input from '../Molecules/Input';
import CostumButton from '../Atomes/CostumButton';
import {DISABLE_COLOR, PRIMARY_COLOR} from '../staticData/colors';

const ForgetPasswordScreen = () => {
  const [email, setEmail] = useState('');
  return (
    <View style={styles.container}>
      <Title text="Forgot password" size={32} weight="800" />
      <Title
        specialStyle={{...styles.descriptionStle}}
        color="#5C6780"
        text="Please enter your email and we’ll help you set a new password."
        size={16}
      />
      <Input
        specialStyle={{marginTop: 40}}
        label="Email"
        value={email}
        onChangeInput={text => setEmail(text)}
        placeHolder="e.g. wileypost@gmail.com"
      />
      <View style={styles.submitContainer}>
        <CostumButton
          text="Submit"
          backgroundCOlor={email.length > 0 ? PRIMARY_COLOR : DISABLE_COLOR}
          textColor={email.length > 0 ? 'white' : '#A0A0A0'}
          width={236}
          specialStyle={{marginTop: 80}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  descriptionStle: {
    marginTop: 30,
  },
  submitContainer: {
    width: '100%',
    alignItems: 'center',
  },
});

export default ForgetPasswordScreen;
