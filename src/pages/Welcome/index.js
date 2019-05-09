import React, { Component } from "react";
import api from "../../services/api";
import { colors } from "../../styles";
import AsyncStorage from "@react-native-community/async-storage";
import PropTypes from "prop-types";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator
} from "react-native";

import styles from "./styles";

export default class Welcome extends Component {
  state = {
    username: "",
    loading: false,
    error: false
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    })
  };

  checkUserExists = async username => {
    const user = await api.get(`/users/${username}`);

    return user;
  };

  saveUser = async username => {
    await AsyncStorage.setItem("@Githuber:username", username);
  };

  signIn = async () => {
    this.setState({ loading: true });
    const { username } = this.state;
    const { navigation } = this.props;

    try {
      await this.checkUserExists(username);
      await this.saveUser(username);

      navigation.navigate("User");
    } catch (err) {
      this.setState({ loading: false, error: true });
      console.log("usuário inexistente");
    }
  };

  render() {
    const { username, loading, error } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.secundary}
        />
        <Text style={styles.title}>Bem-vindo</Text>
        <Text style={styles.text}>
          Para continuar precisamos que você informe seu usuário do GitHub
        </Text>

        {error && <Text style={styles.error}>Usuário inexistente</Text>}

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu usário"
            underlineColorAndroid="transparent"
            value={username}
            onChangeText={text => this.setState({ username: text })}
          />
          <TouchableOpacity style={styles.button} onPress={this.signIn}>
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Prosseguir</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
