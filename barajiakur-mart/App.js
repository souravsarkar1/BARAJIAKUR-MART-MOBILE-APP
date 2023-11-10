import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './src/routes/Routes';
import { Provider } from 'react-redux';
import { persistor, store } from './Redux/sote';
import { PersistGate } from 'redux-persist/integration/react'


export default function App() {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
      </PersistGate>
    </Provider>

  );
}
