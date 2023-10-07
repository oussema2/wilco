import {TouchableOpacity, Image, Text} from 'react-native';
import React, {FC} from 'react';

interface IconProps {
  path: string;
  activeColor?: string;
  onPress: () => void;
  specialStyle?: {};
  width?: number;
  label?: string;
}

const Icon: FC<IconProps> = ({
  path,
  activeColor,
  onPress,
  specialStyle,
  width,
  label,
}) => {
  return (
    <TouchableOpacity
      style={{
        ...specialStyle,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: 5,
      }}
      onPress={onPress}>
      <Image
        source={path}
        style={{
          width: width ? width : 20,
          height: width ? width : 20,
          tintColor: activeColor,
        }}
      />
      {label ? <Text>{label}</Text> : null}
    </TouchableOpacity>
  );
};

export default Icon;
