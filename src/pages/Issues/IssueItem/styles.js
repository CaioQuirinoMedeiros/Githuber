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
    flexDirection: "row",
    alignItems: "center",
    borderTopLeftRadius: metrics.baseRadius,
    borderBottomLeftRadius: metrics.baseRadius,
    flex: 4
  },
  image: {
    borderRadius: 17.5,
    width: 35,
    height: 35,
    marginRight: metrics.baseMargin
  },
  info: {
    flex: 1
  },
  title: {
    flex: 1,
    fontSize: 14,
    fontWeight: "bold",
    color: colors.darker
  },
  author: {
    fontSize: 12,
    marginTop: metrics.baseMargin / 2
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
