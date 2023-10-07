import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Picker from '../Molecules/Picker';
import CostumButton from '../Atomes/CostumButton';
import Input from '../Molecules/Input';
import {PRIMARY_COLOR} from '../staticData/colors';

const CreateYourProfile = ({
  profileData,
  setProfileData,
  navigation,
  setStepNumber,
  stepNumber,
  showRolePage,
  pickedRoles,
  buttonAction,
}) => {
  const isDisabled = !(
    profileData.first_name &&
    profileData.last_name &&
    profileData.roles
  );
  return (
    <View style={styles.stepContentContainer}>
      <Input
        value={profileData.first_name}
        specialStyle={{marginBottom: 35}}
        onChangeInput={text =>
          setProfileData({...profileData, first_name: text})
        }
        label="Fist name *"
        placeHolder="e.g. Wiley"
      />
      <Input
        value={profileData.last_name}
        specialStyle={{marginBottom: 35}}
        onChangeInput={text =>
          setProfileData({...profileData, last_name: text})
        }
        label="Last name *"
        placeHolder="e.g. Post"
      />
      <Picker
        content={
          pickedRoles.length > 0
            ? pickedRoles.map(el => el.label).join(',')
            : 'Select your role in GA community'
        }
        label="Roles *"
        onPress={showRolePage}
      />
      <View style={styles.buttonContainer}>
        <CostumButton
          onPress={buttonAction}
          textColor={isDisabled ? '#A0A0A0' : 'white'}
          disable={isDisabled}
          text={'Next'}
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

export default CreateYourProfile;
