import {View, Text, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import Title from '../Atomes/Title';
import {Switch} from 'react-native-paper';
import {PRIMARY_COLOR} from '../staticData/colors';
interface SwitchWithTitleProps {
  title: string;
  onChange: () => {};
  value: boolean;
}
const SwitchWithTitle: FC<SwitchWithTitleProps> = ({
  onChange,
  title,
  value,
}) => {
  return (
    <View style={styles.container}>
      <Title text="Add flight manually" weight="800" size={16} />
      <Switch onChange={onChange} value={value} thumbColor={PRIMARY_COLOR} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export default SwitchWithTitle;
