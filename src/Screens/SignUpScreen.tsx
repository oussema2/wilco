import {View, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from '../Atomes/Icon';
import Dot from '../Atomes/Dot';
import Title from '../Atomes/Title';
import CreateYourProfile from '../Pages/CreateYourProfile';
import SetUpYourAccount from '../Pages/SetUpYourAccount';
import RolesScreen from './RolesScreen';
import CostumButton from '../Atomes/CostumButton';
import {PRIMARY_COLOR} from '../staticData/colors';
import SignUpHeader from '../Molecules/SignUpHeader';

const SignUpScreen = ({route, navigation}) => {
  const [stepNumber, setStepNumber] = useState(0);
  const [profileData, setprofileData] = useState({
    first_name: '',
    last_name: '',
    roles: [],
    email: '',
    password: '',
  });
  const [roleState, setRoleState] = useState({
    roles: [
      {label: 'Pilot', picked: false},
      {label: 'Mechanic', picked: false},
      {label: 'Air Traffic Controller', picked: false},
      {label: 'Airport Manager / Employee', picked: false},
      {label: 'FBO Manager / Employee', picked: false},
    ],
    other: {display: false, otherRoles: []},
    saveDisable: true,
  });
  const handleCheck = label => {
    const isPicked = roleState.roles.filter(
      el => el.label === label && el.picked === true,
    );
    console.log(isPicked);
    if (isPicked.length > 0) {
      const newPickedRoles = roleState.roles.map(el =>
        el.label === label ? {...el, picked: false} : el,
      );
      setRoleState({
        ...roleState,
        saveDisable:
          newPickedRoles.filter(el => el.picked === true).length === 0
            ? true
            : false,
        roles: newPickedRoles,
      });
    } else {
      setRoleState({
        ...roleState,
        saveDisable: false,
        roles: roleState.roles.map(el =>
          el.label === label ? {...el, picked: true} : el,
        ),
      });
    }
  };
  const handleOther = () => {
    setRoleState({
      ...roleState,
      other: {...roleState.other, display: !roleState.other.display},
    });
  };

  const [displayRolesPage, setDisplayRolesPage] = useState(false);
  const StepTitles = [
    {
      stepTitle: 'Create your profile',
    },
    {
      stepTitle: 'Set up your account',
    },
  ];

  const finalizeCreation = () => {
    navigation.navigate('BottomBarNavigation');
  };
  return (
    <View style={styles.container}>
      {displayRolesPage ? (
        <View style={styles.rolePageContainer}>
          <RolesScreen
            handleCheck={handleCheck}
            handleOther={handleOther}
            roleState={roleState}
            returnWithoutSaving={() => {
              setRoleState({
                ...roleState,
                roles: roleState.roles.map(el => {
                  return {
                    ...el,
                    picked: false,
                  };
                }),
              });
              setDisplayRolesPage(false);
            }}
            closeRolesPage={() => setDisplayRolesPage(false)}
          />
        </View>
      ) : null}
      <SignUpHeader
        leftIconAction={() =>
          stepNumber === 0
            ? navigation.navigate('LoginSignUpAskScreen')
            : setStepNumber(stepNumber - 1)
        }
        stepNumber={stepNumber}
      />
      <ScrollView
        keyboardShouldPersistTaps={'always'}
        style={styles.stepContainer}>
        <Title
          text={StepTitles[stepNumber].stepTitle}
          weight={'800'}
          size={32}
        />
        {stepNumber === 0 ? (
          <CreateYourProfile
            profileData={profileData}
            setProfileData={setprofileData}
            buttonAction={() => {
              setStepNumber(stepNumber + 1);
            }}
            navigation={navigation}
            showRolePage={() => setDisplayRolesPage(true)}
            pickedRoles={roleState.roles.filter(el => el.picked === true)}
          />
        ) : (
          <SetUpYourAccount
            buttonAction={finalizeCreation}
            profileData={profileData}
            setProfileData={setprofileData}
            navigation={navigation}
            setStepNumber={setStepNumber}
            stepNumber={stepNumber}
          />
        )}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
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
  rolePageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 999,
    height: '100%',
  },
});

export default SignUpScreen;
