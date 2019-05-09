import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import PropTypes from "prop-types";
import { colors } from "../../styles";

import { View, Text, TouchableOpacity, StatusBar } from "react-native";

import styles from "./styles";

const Filter = ({ filter, changeFilter }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={() => changeFilter("all")}>
      <Text style={[styles.filter, filter === "all" && styles.active]}>
        Todas
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.button}
      onPress={() => changeFilter("open")}
    >
      <Text style={[styles.filter, filter === "open" && styles.active]}>
        Abertas
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.button}
      onPress={() => changeFilter("closed")}
    >
      <Text style={[styles.filter, filter === "closed" && styles.active]}>
        Fechadas
      </Text>
    </TouchableOpacity>
  </View>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired
};

export default Filter;
