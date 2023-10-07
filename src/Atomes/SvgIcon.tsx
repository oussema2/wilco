import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {SvgXml} from 'react-native-svg';

interface SVGIconProps {
  svg: string;
  activeColor?: string;
  onPress?: () => void;
  specialStyle?: {};
  width?: number;
  height?: number;
}
const SvgIcon: FC<SVGIconProps> = ({
  onPress,
  svg,
  activeColor,
  specialStyle,
  width,
  height,
}) => {
  return (
    <View>
      {onPress ? (
        <TouchableOpacity
          style={{
            ...specialStyle,
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            marginRight: 5,
          }}
          onPress={onPress}>
          <SvgXml
            fill={activeColor}
            xml={svg}
            width={width}
            height={height}
            style={{
              ...specialStyle,
            }}
          />
        </TouchableOpacity>
      ) : (
        <SvgXml
          fill={activeColor}
          xml={svg}
          width={width}
          height={height}
          style={{
            ...specialStyle,
          }}
        />
      )}
    </View>
  );
};

export default SvgIcon;
