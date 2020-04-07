import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FloatingActionButton from '../AnimationComp/FloatingActionButton';
import RatingStars from '../AnimationComp/RatingStars';
import TabbarAnimation from '../AnimationComp/TabbarAnimation';
import SoundWave from '../AnimationComp/SoundWave';

const Animation = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Ainmation demos</Text>
      <View style={{position: 'absolute', top: '50%'}}>
        <RatingStars numstar={5} rating={2} color="#f02A4B" />
      </View>
      <SoundWave />
      <FloatingActionButton />
      <TabbarAnimation />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'rgba(0,0,0,.1)',
    flex: 1,
    position: 'relative',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 5,
  },
});
export default Animation;
