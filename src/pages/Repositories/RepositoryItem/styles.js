import { StyleSheet } from "react-native";
import { colors, metrics } from "../../../styles";

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    marginHorizontal: metrics.baseMargin * 2,
    marginVertical: metrics.baseMargin
  },
  container: {
    backgroundColor: colors.white,
    padding: metrics.basePadding,
    justifyContent: "center",
    borderTopLeftRadius: metrics.baseRadius,
    borderBottomLeftRadius: metrics.baseRadius,
    flex: 4
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.darker
  },
  infoContainer: {
    flexDirection: "row",
    marginTop: metrics.baseMargin
  },
  info: {
    flexDirection: "row",
    marginRight: metrics.baseMargin,
    alignItems: "center"
  },
  infoIcon: {
    color: colors.dark
  },
  infoText: {
    color: colors.dark,
    fontSize: 12,
    marginLeft: metrics.baseMargin / 2
  },
  button: {
    width: 40,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: metrics.baseRadius,
    borderBottomRightRadius: metrics.baseRadius,
    flex: 1
  },
  icon: {
    color: colors.lighter
  }
});

export default styles;
