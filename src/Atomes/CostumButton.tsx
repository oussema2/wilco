import {View, Text, Button, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import Title from './Title';

interface ButtonProps {
  text: string;
  width?: number;
  backgroundCOlor: string;
  onPress: () => void;
  radius?: number;
  textSize: number;
  specialStyle: {};
  textColor: string;
  textWeight?: string;
  disable?: boolean;
}

const CostumButton: FC<ButtonProps> = ({
  backgroundCOlor,
  onPress,
  text,
  width,
  textColor,
  specialStyle,
  disable,
}) => {
  return (
    <TouchableOpacity
      disabled={disable ? disable : false}
      onPress={onPress}
      style={{
        ...specialStyle,
        width: width ? width : '100%',
        borderRadius: 50,
        backgroundColor: backgroundCOlor ? backgroundCOlor : 'white',
        alignItems: 'center',
        paddingVertical: 15,
      }}>
      <Title weight={'800'} color={textColor} size={18} text={text} />
    </TouchableOpacity>
  );
};

export default CostumButton;
