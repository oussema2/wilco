import {View, Text, StyleSheet} from 'react-native';
import React, {FC} from 'react';

interface TitleProps {
  color?: string;
  size: number;
  text: string;
  weight?: string;
  specialStyle?: {};
  onPress?: () => {};
}

const Title: FC<TitleProps> = ({
  size,
  text,
  color,
  weight,
  specialStyle,
  onPress,
}) => {
  return (
    <Text
      onPress={onPress}
      style={{
        ...specialStyle,
        color: color ? color : 'black',
        fontSize: size,
        fontWeight: weight ? weight : '400',
      }}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({});
export default Title;
