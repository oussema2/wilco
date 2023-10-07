import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import Title from '../Atomes/Title';
import Icon from '../Atomes/Icon';
interface PickerProps {
  label: string;
  content: string;
  onPress: () => {};
}
const Picker: FC<PickerProps> = ({content, label, onPress}) => {
  return (
    <View>
      <Title text={label} size={16} weight={'800'} />
      <TouchableOpacity onPress={onPress} style={styles.pickerContainer}>
        <Title text={content} size={14} />
        <Icon
          specialStyle={{...styles.arrowStyles}}
          path={require('../assets/Images/arrowright.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  pickerContainer: {
    width: '100%',
    paddingHorizontal: 10,
    backgroundColor: '#F2F2F2',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 5,
    position: 'relative',
  },
  arrowStyles: {
    position: 'absolute',
    right: 15,
    top: 14,
  },
});
export default Picker;
