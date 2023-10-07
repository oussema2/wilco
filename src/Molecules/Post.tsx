import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Platform,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import React, {FC, useCallback, useRef} from 'react';
import Icon from '../Atomes/Icon';
import Title from '../Atomes/Title';
import SvgIcon from '../Atomes/SvgIcon';
import {VisibilitySVG} from '../assets/SVG/VisibilitySVG';
import Dot from '../Atomes/Dot';
import {ThreeDotSVG} from '../assets/SVG/ThreeDotSVG';
import {PRIMARY_COLOR} from '../staticData/colors';
import {arrowRightSVG} from '../assets/SVG/arrow-rightSVG';
import {AirPlaneSVG} from '../assets/SVG/AirPlaneSVG';
import {stopwatchSVG} from '../assets/SVG/stopwatchSVG';
import {FlightInfoImageSVG} from '../assets/SVG/FlightInfoImageSVG';
import {SliderBox} from 'react-native-image-slider-box';
import PostMediaItem from '../Atomes/PostMediaItem';
import AirPortsBadge from './AirPortsBadge';
import {likeSVG} from '../assets/SVG/likeSVG';
import {CommentSVG} from '../assets/SVG/CommentSVG';
interface PostProps {
  showMap: () => {};
}
const Post: FC<PostProps> = ({showMap}) => {
  const [images, setImages] = React.useState([
    'https://source.unsplash.com/1024x768/?nature',
    'https://source.unsplash.com/1024x768/?water',
    'https://source.unsplash.com/1024x768/?tree',
  ]);

  const text =
    'Here is the route we took yesterday for the first time. It would help if you could give me some tips on how to better plan this type of flight. Thank you! #AirVenture #cirrus #communities';
  return (
    <View style={styles.container}>
      <View style={styles.topPostContainer}>
        <View style={styles.topPostLEftSide}>
          <Image
            style={styles.profilePic}
            source={{
              uri: 'https://i.ytimg.com/vi/VLUUdstAp1k/maxresdefault.jpg',
            }}
          />
          <View style={styles.topPostLeftSideText}>
            <Title size={16} weight={'600'} text="Logan Huling" />
            <View style={styles.topPostLeftSideBtottomText}>
              <Title
                specialStyle={{marginRight: 3}}
                size={16}
                color="#767676"
                text="4h"
              />
              <Dot width={5} color={'#5B5B5B'} />

              <SvgIcon
                activeColor="black"
                height={20}
                width={20}
                svg={VisibilitySVG}
              />
              {/* <Icon
                width={200}
                activeColor="black"
                path={require('../assets/Images/globe-americas.png')}
              /> */}
            </View>
          </View>
        </View>
        <View style={styles.topPostRightSide}>
          <SvgIcon
            activeColor="black"
            height={20}
            width={20}
            svg={ThreeDotSVG}
          />
        </View>
      </View>
      <View style={styles.postContentContainer}>
        <Title
          size={16}
          text={text
            .split(' ')
            .filter(el => el[0] !== '#')
            .join(' ')}
          color={'black'}
        />
        <Title
          size={16}
          weight={'600'}
          text={text
            .split(' ')
            .filter(el => el[0] === '#')
            .join(' ')}
          color={PRIMARY_COLOR}
        />
      </View>
      <View style={styles.flightDetailCOntainer}>
        <View style={styles.flightPathContainer}>
          <View>
            <TouchableOpacity onPress={showMap}>
              <Title text="JAQ" size={16} weight={'800'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={showMap}>
              <Title text="09:34" color="#767676" />
            </TouchableOpacity>
          </View>
          {/* <SvgIcon
            svg={arrowRightSVG}
            width={100}
            height={100}

            activeColor="red"
          /> */}
          <SvgIcon
            specialStyle={{marginBottom: 5, marginLeft: 5}}
            activeColor="black"
            width={18}
            height={18}
            svg={arrowRightSVG}
          />
          <View>
            <Title text="JAQ" size={16} weight={'800'} />
            <Title text="09:34" size={16} color="#767676" />
          </View>
        </View>
        <View style={styles.flightDetailLeftSide}>
          <View style={styles.detailsFlightHolder}>
            <SvgIcon
              activeColor="black"
              width={25}
              height={25}
              svg={AirPlaneSVG}
            />
            <Title text="Cessna 172" color="#767676" />
          </View>
          <View style={styles.detailsFlightHolder}>
            <SvgIcon
              activeColor="black"
              width={25}
              height={25}
              svg={stopwatchSVG}
            />
            <Title text="51 m" color="#767676" />
          </View>
          <View style={styles.detailsFlightHolder}>
            <SvgIcon
              activeColor="black"
              width={35}
              height={35}
              svg={FlightInfoImageSVG}
            />
            <Title text="145 kn" color="#767676" />
          </View>
        </View>
      </View>
      <FlatList
        onScroll={() => console.log('scrolling')}
        horizontal={true}
        ItemSeparatorComponent={
          Platform.OS !== 'android' &&
          (({highlighted}) => (
            <View style={[styles.separator, highlighted && {marginLeft: 0}]} />
          ))
        }
        data={images}
        renderItem={({item, index, separators}) => <PostMediaItem url={item} />}
      />

      <View style={styles.dataContainer}>
        <View style={styles.dataElement}>
          <AirPortsBadge text="COPA" />
          <AirPortsBadge text="COPA COPA" />
          <AirPortsBadge text="COPA COPACOPA " />
        </View>
      </View>
      <View style={styles.commentLikeContainer}>
        <View style={styles.commentLikeEl}>
          <SvgIcon width={20} height={20} svg={likeSVG} />
          <Title weight="600" text="10 likes" />
        </View>
        <View style={styles.commentLikeEl}>
          <SvgIcon width={20} height={20} svg={CommentSVG} />
          <Title weight="600" text="38 Comments" />
        </View>
      </View>
      <View />
    </View>
  );
};

const styles = StyleSheet.create({
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  container: {
    marginVertical: 5,
    backgroundColor: 'white',
  },
  topPostContainer: {
    width: '100%',
    flexDirection: 'row',
    padding: 20,
  },
  topPostLEftSide: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: '100%',
  },
  topPostRightSide: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: '100%',
  },
  topPostLeftSideText: {
    alignItems: 'flex-start',
    marginLeft: 15,
    justifyContent: 'center',
  },
  topPostLeftSideBtottomText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 4,
  },
  postContentContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  flightDetailCOntainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  flightPathContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  flightDetailLeftSide: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  detailsFlightHolder: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerSlider: {
    backgroundColor: 'white',
    paddingTop: 10,
    flex: 1,
  },
  dataContainer: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  dataElement: {
    borderRadius: 50,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 42,
    backgroundColor: '#E6F6F9',
    elevation: 5,
  },
  commentLikeContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  commentLikeEl: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Post;
