import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {FC, useState} from 'react';
import Title from '../Atomes/Title';
import Icon from '../Atomes/Icon';

interface InputProps {
  label: string;
  specialStyle?: {};
  onChangeInput: (text: string) => void;
  isSecure?: boolean;
  placeHolder: string;
  value: string;
  numberOfLines?: number;
}

const Input: FC<InputProps> = ({
  label,
  specialStyle,
  onChangeInput,
  isSecure = false,
  placeHolder,
  value,
  numberOfLines,
}) => {
  const inputChange = (text: string) => {
    onChangeInput(text);
  };
  return (
    <View style={{...styles.container, ...specialStyle}}>
      <Title
        color="#000000"
        size={16}
        weight={'800'}
        specialStyle={{
          justifyContent: 'flex-start',
          marginBottom: 5,
        }}
        text={label}
      />

      <TextInput
        multiline={true}
        numberOfLines={numberOfLines ? numberOfLines : 1}
        defaultValue={value}
        secureTextEntry={isSecure}
        onChangeText={newText => inputChange(newText)}
        placeholder={placeHolder}
        style={{
          ...styles.input,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    justifyContent: 'flex-start',
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
    paddingHorizontal: 15,
    textAlignVertical: 'top',
  },
  container: {
    width: '100%',
  },
});
export default Input;
