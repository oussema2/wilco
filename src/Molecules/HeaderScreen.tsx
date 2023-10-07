import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import Title from '../Atomes/Title';
import Icon from '../Atomes/Icon';
import {PRIMARY_COLOR} from '../staticData/colors';
interface HeaderScreenProps {
  leftIconAction: () => {};
  headerTitle: string;
  rightText: string;
  rightTitleAction: () => {};
  rightTItleDisables: boolean;
}
const HeaderScreen: FC<HeaderScreenProps> = ({
  headerTitle,
  leftIconAction,
  rightText,
  rightTitleAction,
  rightTItleDisables,
}) => {
  return (
    <View style={styles.headerStepperContainer}>
      <Icon
        onPress={leftIconAction}
        activeColor="black"
        // specialStyle={{...styles.headerLeftICon}}
        path={require('../assets/BottomTabIcons/arrow.png')}
      />

      <View>
        <Title size={16} weight={'800'} text={headerTitle} />
      </View>
      <TouchableOpacity
        disabled={rightTItleDisables}
        onPress={rightTitleAction}>
        <Title
          color={rightTItleDisables ? '#A0A0A0' : '#12A3BE'}
          size={16}
          weight={'800'}
          text={rightText}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStepperContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    // paddingHorizontal: 20,
  },
  headerLeftICon: {
    position: 'absolute',
    top: 10,
  },
});

export default HeaderScreen;
