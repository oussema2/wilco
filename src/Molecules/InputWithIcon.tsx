import {View, Text, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import Input from './Input';
import Icon from '../Atomes/Icon';

interface InputWithIconProps {
  label: string;
  specialStyle?: {};
  onChangeInput: (text: string) => void;
  isSecure?: boolean;
  placeHolder: string;
  value: string;
  icon: string;
  iconAction: () => {};
}

const InputWithIcon: FC<InputWithIconProps> = ({
  label,
  onChangeInput,
  placeHolder,
  value,
  isSecure,
  specialStyle,
  icon,
  iconAction,
}) => {
  return (
    <View>
      <Input
        label={label}
        onChangeInput={onChangeInput}
        placeHolder={placeHolder}
        value={value}
        isSecure={isSecure}
        specialStyle={specialStyle}
      />
      <Icon onPress={iconAction} path={icon} specialStyle={{...styles.icon}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
});
export default InputWithIcon;
