import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Animated, Easing, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
const SoundWave = prpos => {
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.waveView, animationStyle]}></Animated.View>
      <Animated.View style={[styles.waveView, animationStyle2]}></Animated.View>
      <Animated.View style={[styles.waveView, animationStyle3]}></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
    marginTop: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  waveView: {
    height: 20,
    width: 20,
    borderColor: '#5A64A833',
    borderWidth: 5,
    position: 'absolute',
  },
});

export default SoundWave;
