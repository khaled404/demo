import React, {useState} from 'react';
import {
  View,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

const FloatingActionButton = props => {
  const [buttonAnimation] = useState(new Animated.Value(0));
  const [open, setOpen] = useState(false);
  const toggleMeun = () => {
    setOpen(e => !e);
    Animated.spring(buttonAnimation, {
      toValue: open ? 0 : 1,
      friction: 5,
    }).start();
  };
  const rotation = {
    transform: [
      {
        rotate: buttonAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '45deg'],
        }),
      },
    ],
  };
  const secondaryStyle1 = {
    transform: [
      {
        scale: buttonAnimation,
      },
      {
        translateY: buttonAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -60],
        }),
      },
    ],
  };
  const secondaryStyle2 = {
    transform: [
      {
        scale: buttonAnimation,
      },
      {
        translateY: buttonAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -120],
        }),
      },
    ],
  };
  const secondaryStyle3 = {
    transform: [
      {
        scale: buttonAnimation,
      },
      {
        translateY: buttonAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -180],
        }),
      },
    ],
  };

  const opacity = buttonAnimation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0, 1],
  });
  return (
    <View style={[styles.container, props.style]}>
      <TouchableWithoutFeedback onPress={toggleMeun}>
        <Animated.View
          style={[styles.button, styles.secondary, secondaryStyle3, opacity]}>
          <Icon name="heart" solid size={20} color="#f02A4B" />
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={toggleMeun}>
        <Animated.View
          style={[styles.button, styles.secondary, secondaryStyle2, opacity]}>
          <Icon name="thumbs-up" solid size={20} color="#f02A4B" />
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={toggleMeun}>
        <Animated.View
          style={[styles.button, styles.secondary, secondaryStyle1, opacity]}>
          <Icon name="map-marker-alt" solid size={20} color="#f02A4B" />
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={toggleMeun}>
        <Animated.View style={[styles.button, styles.menu]}>
          <Animated.View style={rotation}>
            <Icon name="plus" size={24} color="#fff" />
          </Animated.View>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 75,
    right: 15,
    width: 60,
    height: 60,
  },
  button: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius: 10,
    shadowColor: '#f02A4B',
    shadowOpacity: 0.3,
    shadowOffset: {height: 10},
    elevation: 1,
  },
  menu: {
    backgroundColor: '#f02A4B',
  },
  secondary: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    backgroundColor: '#fff',
  },
});
export default FloatingActionButton;
