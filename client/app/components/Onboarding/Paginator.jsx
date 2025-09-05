import React from 'react'
import { View, Animated } from 'react-native'
import { width, moderateScale } from '../../styles/screen.styles';
import EStyleSheet from 'react-native-extended-stylesheet';

export default Paginator = ({ data, scrollX }) => {
  return (
    <View style={{ flexDirection: 'row', height: moderateScale(64) }}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width]

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [moderateScale(10), moderateScale(20), moderateScale(10)],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [moderateScale(0.3), moderateScale(1), moderateScale(0.3)],
          extrapolate: 'clamp',
        });
        return <Animated.View style={[styles.dot, { width: dotWidth, opacity }]} key={i.toString()} />;
      })}
    </View>
  )
}

const styles = EStyleSheet.create({
  dot: {
    backgroundColor: '#0E4093',
    height: '10$rem',
    borderRadius: '5$rem',
    marginHorizontal: '10$rem',
    marginVertical: '20$rem'
  }
});