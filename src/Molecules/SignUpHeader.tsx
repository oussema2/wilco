import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Dot from '../Atomes/Dot';
import Icon from '../Atomes/Icon';

const SignUpHeader = ({leftIconAction, stepNumber}) => {
  return (
    <View style={styles.headerStepperContainer}>
      <Icon
        onPress={leftIconAction}
        activeColor="black"
        specialStyle={styles.returnIconStepper}
        path={require('../assets/BottomTabIcons/arrow.png')}
      />
      <View style={styles.dotsStepperContainer}>
        <Dot specialStyles={{width: 30}} color={'#12A3BE'} />
        <Dot
          specialStyles={{width: 30}}
          color={stepNumber === 1 ? '#12A3BE' : '#D3D3D3'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default SignUpHeader;
