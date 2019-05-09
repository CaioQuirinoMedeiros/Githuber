import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import PropTypes from "prop-types";
import { colors } from "../../styles";
import AsyncStorage from "@react-native-community/async-storage";

import { View, Text, TouchableOpacity, StatusBar } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./styles";

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    })
  };

  signOut = async () => {
    const { navigation } = this.props;

    await AsyncStorage.clear();

    navigation.navigate("Welcome");
  };

  render() {
    const { title } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
        <View style={styles.left} />
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <TouchableOpacity style={styles.button} onPress={this.signOut}>
          <Icon name="sign-out" size={18} style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(Header);
