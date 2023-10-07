import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Title from '../Atomes/Title';
import {PRIMARY_COLOR} from '../staticData/colors';
import NotificationItem from '../Molecules/NotificationItem';

const NotificationScreen = () => {
  const test = true;
  return (
    <View style={styles.container}>
      <View style={styles.TitleContainer}>
        <Title text="Notifications" size={36} weight={'800'} />
      </View>
      <View style={styles.notificationTypeHeader}>
        <View
          style={{
            ...styles.notificationTypeItem,
            borderBottomColor: PRIMARY_COLOR,
            borderBottomWidth: test ? 4 : 0,
          }}>
          <Title size={16} text="All" />
        </View>
        <View
          style={{
            ...styles.notificationTypeItem,
            borderBottomColor: PRIMARY_COLOR,
            borderBottomWidth: !test ? 4 : 0,
          }}>
          <Title size={16} text="Mentions" />
        </View>
      </View>
      <ScrollView>
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  TitleContainer: {
    padding: 20,
  },
  notificationTypeHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationTypeItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
});
export default NotificationScreen;
