import {View, Text, StyleSheet} from 'react-native';
import React, {FC, useState} from 'react';
import Icon from '../Atomes/Icon';
import Title from '../Atomes/Title';

interface CostumCheckBoxProps {
  label: string;
  icon: string;
  checkAction: () => {};
  picked: boolean;
}

const CostumCheckBox: FC<CostumCheckBoxProps> = ({
  checkAction,
  icon,
  label,
  picked,
}) => {
  const check = () => {
    checkAction(label);
  };
  const uncheck = () => {
    checkAction(label);
  };
  return (
    <View style={styles.container}>
      {!picked ? (
        <Icon
          onPress={check}
          path={require('../assets/Images/CheckboxUnchecked.png')}
        />
      ) : null}
      {picked ? (
        <Icon
          onPress={uncheck}
          path={require('../assets/Images/CheckboxChecked.png')}
        />
      ) : null}
      <Title size={14} specialStyle={{marginLeft: 10}} text={label} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 30,
  },
});

export default CostumCheckBox;
