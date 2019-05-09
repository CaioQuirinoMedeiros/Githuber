import React from "react";
import PropTypes from "prop-types";

import { View, Text, Image, Linking, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./styles";

const IssueItem = ({ issue }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: issue.user.avatar_url }} />
        <View style={styles.info}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {issue.title}
          </Text>
          <Text style={styles.author}>{issue.user.login}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          Linking.openURL(issue.html_url);
        }}
      >
        <Icon name="arrow-right" size={16} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

IssueItem.propTypes = {
  issue: PropTypes.shape({
    title: PropTypes.string,
    html_url: PropTypes.string,
    user: PropTypes.shape({
      login: PropTypes.string,
      avatar_url: PropTypes.string
    })
  })
};

export default IssueItem;
