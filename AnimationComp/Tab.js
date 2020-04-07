import React, {cloneElement} from 'react';
import {View} from 'react-native';

const Tab = props => {
  return <View>{cloneElement(props.children, {active: true})} </View>;
};

export default Tab;
