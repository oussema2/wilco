import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Switch,
} from 'react-native';
import React, {useState} from 'react';
import Title from '../Atomes/Title';
import SvgIcon from '../Atomes/SvgIcon';
import {chevronLeftSVG} from '../assets/SVG/chevronLeftSVG';
import {planeSVG} from '../assets/SVG/planeSVG';
import TitleWithAction from '../Atomes/TitleWithAction';
import {PRIMARY_COLOR} from '../staticData/colors';
import CostumButton from '../Atomes/CostumButton';
import AirCraftItem from '../Molecules/AirCraftItem';
import FlightItem from '../Molecules/FlightItem';
import SwitchWithTitle from '../Molecules/SwitchWithTitle';

const AddFlightScreen = ({navigation, route}) => {
  const {from} = route.params;
  const [checkedAirCraft, setcheckedAirCraft] = useState('');
  const [checkedFlight, setCheckedFlight] = useState('');
  const [tweakParams, setTweakParams] = useState({
    manualFlight: false,
    track: false,
  });
  console.log(checkedFlight);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Title text="Share a Flight" weight="800" size={16} />
        <View style={styles.iconStyle}>
          <SvgIcon
            onPress={() => navigation.navigate(from)}
            width={20}
            height={20}
            svg={chevronLeftSVG}
          />
        </View>
      </View>
      <View style={styles.pageDescription}>
        <Title
          specialStyle={{textAlign: 'center'}}
          color="#767676"
          text="Select an aircraft and the flight 
you want to share to others."
        />
      </View>

      <View style={styles.airCraftContainer}>
        <Title
          text="Aircraft Detail - Choose an aircraft * "
          size={18}
          weight="800"
        />
        <View style={styles.airCraftsItemContainer}>
          <AirCraftItem
            title="Cessna 172 Skyhawk"
            checkedValue={checkedAirCraft}
            onChange={text => setcheckedAirCraft(text)}
            tailNumber="N2129J"
          />
          <AirCraftItem
            title="Cessna 172 Skyhawk"
            checkedValue={checkedAirCraft}
            onChange={text => setcheckedAirCraft(text)}
            tailNumber="2"
          />
          <AirCraftItem
            title="Cessna 172 Skyhawk"
            checkedValue={checkedAirCraft}
            onChange={text => setcheckedAirCraft(text)}
            tailNumber="3"
          />
          <AirCraftItem
            title="Cessna 172 Skyhawk"
            checkedValue={checkedAirCraft}
            onChange={text => setcheckedAirCraft(text)}
            tailNumber="4"
          />
          <AirCraftItem
            title="Cessna 172 Skyhawk"
            checkedValue={checkedAirCraft}
            onChange={text => setcheckedAirCraft(text)}
            tailNumber="5"
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('CreateAirCraftScreen')}>
          <Title
            text="Add an aircraft"
            color={PRIMARY_COLOR}
            size={16}
            weight="600"
            specialStyle={{marginTop: 10}}
          />
        </TouchableOpacity>

        <View style={styles.airCraftsItemContainer}>
          <Title text="Flight data - Select flight *" size={16} weight="800" />
          <FlightItem
            from="JAQ"
            to="SMO"
            departure_time="09:34"
            arrival_time="10:34"
            date="02/28"
            flightId="1"
            onChange={text => setCheckedFlight(text)}
            checkedValue={checkedFlight}
          />
          <FlightItem
            from="JAQ"
            to="SMO"
            departure_time="09:34"
            arrival_time="10:34"
            date="02/28"
            flightId="2"
            onChange={text => setCheckedFlight(text)}
            checkedValue={checkedFlight}
          />
          <FlightItem
            from="JAQ"
            to="SMO"
            departure_time="09:34"
            arrival_time="10:34"
            date="02/28"
            flightId="3"
            onChange={text => setCheckedFlight(text)}
            checkedValue={checkedFlight}
          />
          <FlightItem
            from="JAQ"
            to="SMO"
            departure_time="09:34"
            arrival_time="10:34"
            date="02/28"
            flightId="4"
            onChange={text => setCheckedFlight(text)}
            checkedValue={checkedFlight}
          />
        </View>
      </View>

      <View>
        <SwitchWithTitle
          onChange={() =>
            setTweakParams({
              ...tweakParams,
              manualFlight: !tweakParams.manualFlight,
            })
          }
          value={tweakParams.manualFlight}
          title="Add flight manually "
        />
        <SwitchWithTitle
          onChange={() =>
            setTweakParams({
              ...tweakParams,
              track: !tweakParams.track,
            })
          }
          value={tweakParams.track}
          title="Add flight manually "
        />
      </View>
      {/* <View style={styles.noAirCraftContainer}>
        <SvgIcon
          specialStyle={{marginBottom: 20}}
          svg={planeSVG}
          width={60}
          height={60}
        />
        <Title
          specialStyle={{marginBottom: 20}}
          text="You have no aircrafts in your hangar.
Add your first one to post a flight."
          weight="600"
          size={16}
          color="#767676"
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('CreateAirCraftScreen')}>
          <Title
            specialStyle={{marginBottom: 20}}
            text="Add an aircraft"
            color={PRIMARY_COLOR}
            weight="600"
            size={16}
          />
        </TouchableOpacity>
      </View> */}
      <View style={styles.submiButtonContainer}>
        <CostumButton
          onPress={() => navigation.navigate('BottomBarNavigation')}
          textColor={false ? '#A0A0A0' : 'white'}
          disable={false}
          text={'Add flight'}
          backgroundCOlor={false ? '#E3E3E3' : PRIMARY_COLOR}
          specialStyle={{...styles.submiButton}}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    position: 'relative',
  },
  headerContainer: {
    padding: 20,
    backgroundColor: '#C7F7FF',
    position: 'relative',
    alignItems: 'center',
    width: '100%',
  },
  iconStyle: {
    position: 'absolute',
    left: 20,
    top: 20,
  },
  pageDescription: {
    textAlign: 'center',
    paddingHorizontal: 30,
    width: '100%',
    backgroundColor: '#C7F7FF',
    paddingVertical: 20,
  },
  airCraftContainer: {
    padding: 20,
  },
  noAirCraftContainer: {
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
  submiButtonContainer: {
    width: '100%',
    // position: 'absolute',
    // bottom: 20,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  submiButton: {
    width: '100%',
  },
  airCraftsItemContainer: {
    paddingBottom: 10,
    marginTop: 20,
  },
});

export default AddFlightScreen;
