import { StyleSheet } from "react-native";
import { colors, metrics } from "../../styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginVertical: metrics.baseMargin,
    marginHorizontal: metrics.baseMargin * 2,
    borderRadius: metrics.baseRadius
  },
  button: {
    paddingVertical: metrics.basePadding / 2,
    flex: 1
  },
  filter: {
    fontSize: 14,
    color: colors.dark,
    textAlign: "center"
  },
  active: {
    color: colors.darker,
    fontWeight: "bold"
  }
});

export default styles;
