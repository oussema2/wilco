import {View, Text, Image, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import {Dimensions} from 'react-native';
const {width} = Dimensions.get('screen');
interface PostMediaItemProps {
  url: string;
}
const PostMediaItem: FC<PostMediaItemProps> = ({url}) => {
  return <Image style={style.image} source={{uri: url}} />;
};

const style = StyleSheet.create({
  image: {
    width: width,
    height: 400,
  },
});
export default PostMediaItem;
