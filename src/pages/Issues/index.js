import React, { Component } from "react";
import { View, ActivityIndicator, FlatList } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import PropTypes from "prop-types";
import { NavigationEvents } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";

import Header from "../../components/Header";
import Filter from "../../components/Filter";
import api from "../../services/api";
import styles from "./styles";
import IssueItem from "./IssueItem";

const TabIcon = ({ tintColor }) => (
  <Icon name="exclamation" size={20} color={tintColor} />
);

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired
};

export default class Issues extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon
  };

  state = {
    data: [],
    loading: true,
    refreshing: false,
    filter: "all",
    repository: "",
    error: ""
  };

  async componentDidMount() {
    this.loadIssues();
  }

  loadIssues = async () => {
    const repository = await AsyncStorage.getItem("@Githuber:repository");

    if (!repository)
      return this.setState({ error: "Selecione um repositório" });

    this.setState({ refreshing: true, repository, error: "" });

    const { data } = await api.get(
      `/repos/${repository}/issues?state=${this.state.filter}`
    );

    this.setState({ data, loading: false, refreshing: false });
  };

  renderListItem = ({ item }) => <IssueItem issue={item} />;

  renderList = () => {
    const { data, refreshing } = this.state;

    return (
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadIssues}
        refreshing={refreshing}
      />
    );
  };

  changeFilter = async filter => {
    await this.setState({ filter });
    this.loadIssues();
  };

  render() {
    const { loading, filter, repository, error } = this.state;
    return (
      <View style={styles.container}>
        <NavigationEvents onDidFocus={() => this.loadIssues()} />
        <Header title={!!error ? error : `Issues de ${repository}`} />
        <Filter filter={filter} changeFilter={this.changeFilter} />
        {loading ? (
          <ActivityIndicator style={styles.loading} />
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}
