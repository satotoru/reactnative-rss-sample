import React from "react";
import { ScrollView, WebView } from "react-native";
import { List, ListItem } from "react-native-elements";
import { getPopularFeeds } from "../repositories/feed";

export default class FeedList extends React.Component {
  static navigationOptions = ({ navigation }) => ({ title: "人気記事" });

  constructor(props) {
    super(props);
    this.state = { items: [], url: "" };
  }

  componentDidMount() {
    getPopularFeeds().then(res =>
      this.setState({
        items: res["rdf:RDF"].item
      })
    );
  }

  render() {
    const { items } = this.state;
    const { navigate } = this.props.navigation;
    console.log(items[0]);
    return (
      <ScrollView>
        <List>
          {items.map((item, i) => (
            <ListItem
              key={i}
              title={item.title[0]}
              onPress={() =>
                navigate("Article", {
                  url: item.$["rdf:about"]
                })}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}
