import React from "react";
import { StatusBar } from "expo-status-bar";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers/rootReducer";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./navigation/CitiesNavDrawer";

const globalStore = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={globalStore}>
      <StatusBar barStyle="light-content" backgroundColor="#11151f" />
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
}
