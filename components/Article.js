import React from 'react';
import { WebView } from 'react-native'

export default function Article(props) {
  return <WebView source={{ uri: props.navigation.state.params.url }} />;
}