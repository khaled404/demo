import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {minus, plus, getName, addName} from '../store/actions/rootAction';

const Home = () => {
  const dispatch = useDispatch();

  const [name, setnName] = useState('');
  const counter = useSelector(state => state.counter);
  const nameList = useSelector(state => state.nameList);
  useEffect(() => {
    dispatch(getName());
  }, [nameList]);

  return (
    <ScrollView>
      <View style={styles.screen}>
        {nameList.map(items => (
          <Text style={{fontSize: 20, color: '#333'}} key={items.id}>
            {items.name}
          </Text>
        ))}
        <TextInput
          placeholder="add Name"
          style={{
            borderWidth: 2,
            padding: 10,
            width: '80%',
            marginVertical: 20,
          }}
          onChangeText={e => setnName(e)}
          onSubmitEditing={() => {
            if (name.length > 0) {
              dispatch(addName(name));
              setnName('');
              dispatch(getName());
            }
          }}
          value={name}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch(plus());
          }}>
          <Text style={{fontSize: 20, color: '#fff'}}>+</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 30}}>{counter}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch(minus());
          }}>
          <Text style={{fontSize: 20, color: '#fff'}}>-</Text>
        </TouchableOpacity>
      </View>
      <Animation />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  button: {
    width: 40,
    height: 40,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#777',
    margin: 20,
  },
});
export default Home;
