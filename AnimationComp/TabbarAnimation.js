import React, {useState, cloneElement} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';
import BellIcon from '../icons/Bell';
import HeartIcon from '../icons/Heart';
import StarIcon from '../icons/Star';
import UserIcon from '../icons/User';
import MessageCircleIcon from '../icons/MessageCircle';
import {Colors, ICON_SIZE} from '../icons/IconConstants';
const TabbarAnimation = prpos => {
  const [active, setActive] = useState(0);
  const [activeAnim, setActiveAnim] = useState(true);
  const [tabAnimtion] = useState(new Animated.Value(ICON_SIZE));
  const tabs = [
    <BellIcon />,
    <HeartIcon />,
    <StarIcon />,
    <MessageCircleIcon />,
    <UserIcon />,
  ];
  const toggleTab = index => {
    setActiveAnim(e => !e);
    Animated.spring(tabAnimtion, {
      toValue: activeAnim ? 0 : 1,
      friction: 5,
    }).start();
  };

  const transformStyle = {
    transform: [
      {
        translateX: tabAnimtion.interpolate({
          inputRange: [0, 1],
          outputRange: [0, ICON_SIZE],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      {tabs.map((items, index) => (
        <View key={index} style={styles.iconContainer}>
          <TouchableWithoutFeedback
            onPress={() => {
              setActive(index);
              if (index == index) {
                toggleTab(index);
              }
            }}>
            <View style={styles.iconBox}>
              <Animated.View
                style={
                  index === active
                    ? [styles.cloneIcon, transformStyle]
                    : styles.cloneIcon
                }>
                {cloneElement(items, {active: true})}
              </Animated.View>
              {cloneElement(items, {active: false})}
            </View>
          </TouchableWithoutFeedback>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    backgroundColor: Colors.backColor,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopColor: Colors.border,
    borderTopWidth: 0.5,
  },
  iconContainer: {
    width: '20%',
    alignItems: 'center',
  },
  cloneIcon: {
    position: 'absolute',
    transform: [
      {
        translateX: ICON_SIZE,
      },
    ],
  },
  iconBox: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    position: 'relative',
    overflow: 'hidden',
  },
});

export default TabbarAnimation;
