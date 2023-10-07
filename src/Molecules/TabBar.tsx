import {View, StyleSheet} from 'react-native';
import React, {FC, useContext, useEffect} from 'react';
import Icon from '../Atomes/Icon';
import {TabBarStoreInstance} from '../MobX/Tabbar';
import {observer} from 'mobx-react';
interface TabBarProps {
  screens: [];
}

const TabBar: FC<TabBarProps> = ({navigation, screens, state}) => {
  console.log(TabBarStoreInstance.isShown);
  return (
    <View>
      {TabBarStoreInstance.isShown ? (
        <View style={styles.container}>
          {screens.map((screen, index) => (
            <View
              style={{
                ...styles.iconTabbarContainer,
                borderTopWidth: screen.Index === state.index ? 4 : 0,
              }}
              key={index}>
              <Icon
                label=""
                activeColor={screen.Index === state.index ? 'black' : null}
                specialStyle={{flex: 1}}
                path={screen.icon}
                width={screen.iconSize}
                onPress={() => navigation.navigate(screen.name)}
              />
            </View>
          ))}
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 20,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  costumIcon: {
    width: 58,
    height: 58,
    backgroundColor: '#48A2F5',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 50,
  },
  cotumIconContainer: {
    marginBottom: 50,
    backgroundColor: 'white',

    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    padding: 20,
    transform: [{scaleX: 1.2}],
    alignItems: 'center',
  },
  iconTabbarContainer: {
    borderTopColor: 'black',
    alignItems: 'center',
    flex: 1,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default observer(TabBar);
