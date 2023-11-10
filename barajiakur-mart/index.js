import * as React from 'react';
import { PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { persistor, store } from './Redux/sote';
import { PersistGate } from 'redux-persist/integration/react'
import App from "./App"
export default function Main() {
    return (
        <StoreProvider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <PaperProvider>
                    <App />
                </PaperProvider>
            </PersistGate>
        </StoreProvider>
    );
}
registerComponent(Main);
// registerRootComponent(App);

/*
import * as React from 'react';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import App from './src/App';

export default function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
*/