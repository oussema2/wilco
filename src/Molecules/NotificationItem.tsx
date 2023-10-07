import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import Icon from '../Atomes/Icon';
import Title from '../Atomes/Title';
interface NotificationItemProps {
  time: string;
  pilot: string;
  pilotPic: string;
}
const NotificationItem: FC<NotificationItemProps> = ({
  pilot,
  pilotPic,
  time,
}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Icon width={50} path={require('../assets/Images/Avatar.png')} />
      <View style={styles.notificationDetailContainer}>
        <Text>
          <Title text="Tom Patel " weight="800" size={14} />
          <Title text="mentioned you on a post" />
        </Text>
        <Title text="just now" size={12} color="#767676" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationDetailContainer: {
    marginLeft: 8,
  },
});
export default NotificationItem;
