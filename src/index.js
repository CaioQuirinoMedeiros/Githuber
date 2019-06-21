import React, { Component } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import "./config/ReactotronConfig";
import "./config/DevToolsConfig";
import CodePush from "react-native-code-push";
import OneSignal from "react-native-one-signal";

import createNavigator from "./routes";

class App extends Component {
  constructor(props) {
    super(props);

    OneSignal.init("e49c25d1-f8a0-4535-ac53-52a27efaf48b");
    OneSignal.addEventListener("received", this.onReceived);
    OneSignal.addEventListener("opened", this.onOpened);
    OneSignal.addEventListener("ids", this.onIds);
  }

  state = {
    userChecked: false,
    userLogged: false
  };

  onReceived = data => {};

  onOpened = notification => {};

  onIds = id => {};

  async componentDidMount() {
    const username = await AsyncStorage.getItem("@Githuber:username");

    this.setState({ userChecked: true, userLogged: !!username });
  }

  componentWillUnmount() {
    OneSignal.removeEventListener("received", this.onReceived);
    OneSignal.removeEventListener("opened", this.onOpened);
    OneSignal.removeEventListener("ids", this.onIds);
  }

  render() {
    const { userChecked, userLogged } = this.state;

    if (!userChecked) return null;

    const Routes = createNavigator(userLogged);

    return <Routes />;
  }
}

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME
})(App);
