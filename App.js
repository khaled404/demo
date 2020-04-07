/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
// import Home from './Screen/Home';
// import {Provider} from 'react-redux';
// import {createStore, applyMiddleware, compose} from 'redux';
// import thunk from 'redux-thunk';
// import root from './store/reducers/root';
// import {persistStore, persistReducer} from 'redux-persist';
// import AsyncStorage from '@react-native-community/async-storage';
// import {PersistGate} from 'redux-persist/es/integration/react';
// import {View, ActivityIndicator} from 'react-native';
// import {offline} from '@redux-offline/redux-offline';
// import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import Animation from './Screen/Animation';

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   whitelist: ['counter'],
// };
// const persistedReducer = persistReducer(persistConfig, root);

// const store = createStore(
//   persistedReducer,
//   compose(applyMiddleware(thunk), offline(offlineConfig)),
// );
// const persistedStore = persistStore(store);
// const App = () => {
//   return (
//     <Provider store={store}>
//       <PersistGate
//         persistor={persistedStore}
//         loading={
//           <View
//             style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//             <ActivityIndicator size="large" />
//           </View>
//         }>
//         <Home />
//       </PersistGate>
//     </Provider>
//   );
// };
const App = () => <Animation />;
export default App;
