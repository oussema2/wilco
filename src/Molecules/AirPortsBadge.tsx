import {View, Text, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import SvgIcon from '../Atomes/SvgIcon';
import {awardSVG} from '../assets/Images/awardSVG';
import Title from '../Atomes/Title';
interface AirPortBadgeProps {
  text: string;
}
const AirPortsBadge: FC<AirPortBadgeProps> = ({text}) => {
  return (
    <View style={styles.container}>
      <Title specialStyle={{marginRight: 5}} text={text} size={12} />
      <SvgIcon svg={awardSVG} width={18} height={18} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default AirPortsBadge;
