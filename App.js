import  * as React from "react";
import { Rajdhani_600SemiBold } from "@expo-google-fonts/rajdhani";
import {ThemeProvider} from 'react-native-elements'
import * as Font from "expo-font";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import BottomTabNavigator from "./components/BottomTabNavigator";
import loginScreen from './screens/LoginScreen'
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  async loadFonts() {
    await Font.loadAsync({
      Rajdhani_600SemiBold: Rajdhani_600SemiBold
    });
    this.setState({ fontLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    const { fontLoaded } = this.state;
    if (fontLoaded) {
      return <BottomTabNavigator />;
    }
    return null;
  }
}
