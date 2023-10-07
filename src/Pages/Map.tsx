import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import MapView from 'react-native-maps';
import React, {FC} from 'react';
import Title from '../Atomes/Title';
import SvgIcon from '../Atomes/SvgIcon';
import {crossSVG} from '../assets/SVG/crossSVG';
interface MapScreenProps {
  hideMap: () => {};
}
const {height} = Dimensions.get('window');
const Map: FC<MapScreenProps> = ({hideMap}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerMap}>
        <View style={styles.wrapper}>
          <View style={styles.topMap}>
            <Title text="Airport Location" size={20} weight={'800'} />
            <SvgIcon
              width={25}
              height={25}
              onPress={hideMap}
              svg={crossSVG}
              activeColor={'black'}
              specialStyle={{...styles.closeMapStyle}}
            />
          </View>
          <View style={styles.mapContainer}>
            {/* <MapView
              style={{flex: 1}}
              region={{
                latitude: 42.882004,
                longitude: 74.582748,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              showsUserLocation={true}
            /> */}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    width: '100%',
    position: 'relative',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 40,
  },
  containerMap: {
    height: '93%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  wrapper: {
    width: '100%',
    height: '100%',
  },
  topMap: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'relative',
    padding: 20,
    borderBottomColor: '#DEDEDE',
    borderBottomWidth: 1,
  },
  closeMapStyle: {
    position: 'absolute',
    left: 10,
  },
  mapContainer: {
    width: '100%',
    height: '100%',
    padding: 20,
  },
});

export default Map;
