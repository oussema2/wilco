import {View, Text, StyleSheet} from 'react-native';
import React, {FC, useState} from 'react';
import Icon from '../Atomes/Icon';
import Dot from '../Atomes/Dot';
import CostumButton from '../Atomes/CostumButton';
import Title from '../Atomes/Title';
interface StepProps {
  title: String;
  description: String;
  icon: String;
  nextAction: () => {};
  buttonText: sting;
}

const Step: FC<StepProps> = ({
  description,
  icon,
  nextAction,
  title,
  buttonText,
}) => {
  return (
    <View style={styles.stepWrapper}>
      <View style={styles.stepTopSideContainer}>
        <Title color="#000000" text={title} size={25} weight={'800'} />
        <Title
          specialStyle={{
            textAlign: 'center',
            marginTop: 25,
            lineHeight: 20,
            paddingHorizontal: 20,
          }}
          color="#767676"
          size={18}
          text={description}
        />
      </View>
      <Icon specialStyle={{...styles.stepIconStyle}} path={icon} width={170} />
      <CostumButton
        onPress={nextAction}
        text={buttonText}
        backgroundCOlor="#12A3BE"
        radius={50}
        textColor={'white'}
        width={204}
      />
    </View>
  );
};

const AppIntro = ({navigation}) => {
  const [stepNumber, setStepNumber] = useState(0);
  const steps = [1, 1, 1];
  const StepsContent = [
    {
      title: 'Profile',
      description:
        'Create your profile so other WILCO members can get to know you.',
      icon: require('../assets/Images/PilotIntroScreen.png'),
      nextAction: () => setStepNumber(stepNumber + 1),
      buttonText: 'Next',
    },
    {
      title: 'Communities',
      description:
        'Identify the GA communities you’re a part of - e.g. flying clubs, flight schools, airport associations, alumni groups, public benefit flying orgs, etc.',
      icon: require('../assets/Images/AirPlanesIntroScreen.png'),
      nextAction: () => setStepNumber(stepNumber + 1),
      buttonText: 'Next',
    },
    {
      title: 'Share your flights',
      description:
        'Post your flight track and information or manually enter flight details.',
      icon: require('../assets/Images/ShareYourFlightIconIntro.png'),
      nextAction: () => navigation.navigate('LoginSignUpAskScreen'),
      buttonText: "Let's Go",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.headerStepperContainer}>
        <Icon
          onPress={() => (stepNumber > 0 ? setStepNumber(stepNumber - 1) : 0)}
          activeColor="black"
          specialStyle={styles.returnIconStepper}
          path={require('../assets/BottomTabIcons/arrow.png')}
        />
        <View style={styles.dotsStepperContainer}>
          {steps.map((el, index) => (
            <View key={index}>
              <Dot color={index === stepNumber ? '#12A3BE' : '#D3D3D3'} />
            </View>
          ))}
        </View>
      </View>
      <View style={styles.stepContentContainer}>
        <Step {...StepsContent[stepNumber]} />
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

  stepContentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    position: 'relative',
  },
  stepTopSideContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepIconStyle: {
    position: 'absolute',
    top: '40%',
  },
});

export default AppIntro;
