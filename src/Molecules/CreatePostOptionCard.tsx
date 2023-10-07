import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import Title from '../Atomes/Title';
import SvgIcon from '../Atomes/SvgIcon';
import {PRIMARY_COLOR} from '../staticData/colors';
interface CreatePostOptionCardProps {
  label: string;
  icon: string;
  action: () => {};
}

const CreatePostOptionCard: FC<CreatePostOptionCardProps> = ({
  action,
  icon,
  label,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={action} style={styles.iconContainer}>
        <SvgIcon svg={icon} height={24} width={24} />
      </TouchableOpacity>
      <Title
        color="#1F2E4E"
        weight="600"
        specialStyle={{marginTop: 5}}
        text={label}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  iconContainer: {
    width: 99,
    height: 57,
    elevation: 8,
    backgroundColor: '#E6F6F9',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 11,
  },
});
export default CreatePostOptionCard;
