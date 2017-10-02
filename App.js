import React from "react";
import { View, StyleSheet } from "react-native";
import { StackNavigator } from "react-navigation";
import { Constants } from "expo";
import FeedList from "./components/FeedList";
import Article from "./components/Article";

export default StackNavigator(
  {
    FeedList: { screen: FeedList },
    Article: { screen: Article }
  },
  {
    navigationOptions: {
      headerStyle: {
        paddingTop: Constants.statusBarHeight,
        height: 60 + Constants.statusBarHeight
      }
    }
  }
);