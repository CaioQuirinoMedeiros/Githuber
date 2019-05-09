import { StyleSheet } from "react-native";
import { colors, metrics } from "../../styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
    flexWrap: "nowrap",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: colors.darker,
    padding: metrics.basePadding / 2,
    flex: 7
  },
  left: {
    flex: 1,
    padding: metrics.basePadding / 2
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: metrics.basePadding / 2
  },
  icon: {
    color: colors.darker
  }
});

export default styles;
