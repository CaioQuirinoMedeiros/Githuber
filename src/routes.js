import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation";

import { colors } from "./styles";

import Welcome from "./pages/Welcome";
import Repositories from "./pages/Repositories";
import Organizations from "./pages/Organizations";
import Issues from "./pages/Issues";

const Routes = (userLogged = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Welcome,
        User: createBottomTabNavigator(
          {
            Repositories,
            Organizations,
            Issues
          },
          {
            tabBarOptions: {
              showIcon: true,
              showLabel: false,
              activeTintColor: colors.white,
              inactiveTintColor: colors.whiteTransparent,
              style: {
                backgroundColor: colors.secundary
              }
            }
          }
        ),
        Issues
      },
      {
        initialRouteName: userLogged ? "User" : "Welcome"
      }
    )
  );

export default Routes;
