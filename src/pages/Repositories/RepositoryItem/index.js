import React from "react";
import PropTypes from "prop-types";

import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./styles";

const RepositoryItem = ({ repository, handleClick }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {repository.full_name}
        </Text>

        <View style={styles.infoContainer}>
          <View style={styles.info}>
            <Icon name="star" size={12} style={styles.infoIcon} />
            <Text style={styles.infoText}>{repository.stargazers_count}</Text>
          </View>
          <View style={styles.info}>
            <Icon name="code-fork" size={12} style={styles.infoIcon} />
            <Text style={styles.infoText}>{repository.forks_count}</Text>
          </View>
          <View style={styles.info}>
            <Icon name="eye" size={12} style={styles.infoIcon} />
            <Text style={styles.infoText}>{repository.watchers_count}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleClick(repository.full_name)}
      >
        <Icon name="arrow-right" size={16} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

RepositoryItem.propTypes = {
  repository: PropTypes.shape({
    full_name: PropTypes.string,
    stargazers_count: PropTypes.number,
    forks_count: PropTypes.number,
    watchers_count: PropTypes.number
  })
};

export default RepositoryItem;
