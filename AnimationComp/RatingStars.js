import React, {useState} from 'react';
import {
  View,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  Easing,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

const RatingStars = props => {
  let stars = [];
  const [rating, setRating] = useState(props.rating ?? 1);
  const [numstar] = useState(props.numstar ?? 5);
  const [color] = useState(props.color ?? '#f02A4B');
  const [animation] = useState(new Animated.Value(1));
  const starAnimate = () => {
    Animated.timing(animation, {
      toValue: 2,
      duration: 400,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => {
      animation.setValue(1);
    });
  };
  const animationScale = animation.interpolate({
    inputRange: [1, 1.5, 2],
    outputRange: [1, 1.4, 1],
  });
  const animationOpacity = animation.interpolate({
    inputRange: [1, 1.2, 2],
    outputRange: [1, 0.5, 1],
  });
  const animationWobble = animation.interpolate({
    inputRange: [1, 1.25, 1.75, 2],
    outputRange: ['0deg', '-3deg', '3deg', '0deg'],
  });
  const animationStyle = {
    transform: [{scale: animationScale}, {rotate: animationWobble}],
    opacity: animationOpacity,
  };
  for (let x = 1; x <= numstar; x++) {
    stars.push(
      <TouchableWithoutFeedback
        key={x}
        onPress={() => {
          setRating(x);
          starAnimate();
        }}>
        <Animated.View
          style={
            x <= rating
              ? [styles.starContainer, animationStyle]
              : styles.starContainer
          }>
          <Icon
            name="star"
            solid={x <= rating ? true : false}
            size={32}
            color={color}
          />
        </Animated.View>
      </TouchableWithoutFeedback>,
    );
  }
  return <View style={styles.container}>{stars}</View>;
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  starContainer: {
    marginHorizontal: 5,
  },
});
export default RatingStars;
