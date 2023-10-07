import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Input from '../Molecules/Input';
import CostumButton from '../Atomes/CostumButton';
import {PRIMARY_COLOR} from '../staticData/colors';

const SetUpYourAccount = ({profileData, setProfileData, buttonAction}) => {
  const isDisabled = !(profileData.email && profileData.password.length > 8);
  return (
    <View style={styles.stepContentContainer}>
      <Input
        value={profileData.email}
        specialStyle={{marginBottom: 35}}
        onChangeInput={text => setProfileData({...profileData, email: text})}
        label="Email *"
        placeHolder="e.g. wileypost@gmail.com"
      />
      <Input
        value={profileData.password}
        isSecure={true}
        specialStyle={{marginBottom: 35}}
        onChangeInput={text => setProfileData({...profileData, password: text})}
        label="Password *"
        placeHolder="8 character minimum"
      />
      <View style={styles.buttonContainer}>
        <CostumButton
          onPress={buttonAction}
          textColor={isDisabled ? '#A0A0A0' : 'white'}
          disable={isDisabled}
          text={'Create account'}
          backgroundCOlor={isDisabled ? '#E3E3E3' : PRIMARY_COLOR}
          width={236}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerStepperContainer: {
    width: '100%',
    height: 80,
    paddingHorizontal: 10,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  returnIconStepper: {
    position: 'absolute',
    top: 25,
    left: 20,
  },
  dotsStepperContainer: {
    flexDirection: 'row',
  },
  stepContainer: {
    padding: 20,
  },
  stepContentContainer: {
    marginTop: 60,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 50,
  },
});

export default SetUpYourAccount;
