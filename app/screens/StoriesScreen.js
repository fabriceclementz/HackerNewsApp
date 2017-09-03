import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  WebView,
  Linking,
  LayoutAnimation
} from 'react-native';
import Item from '../components/Item';
import Colors from '../themes/Colors';
import { fetchItems, fetchType } from '../api';

export default class StoriesScreen extends React.Component {
  state = {
    ids: [],
    items: [],
    openedItem: null
  };
  componentDidMount() {
    fetchType(this.props.storyType, ids => {
      fetchItems(ids, items => this.setState({ ids, items }));
    });
  }
  openItem = item => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState({ openedItem: item });
  };
  render() {
    const { items, openedItem } = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={items}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Item
              item={item}
              onPress={() => this.openItem(item)}
              onPressUser={() =>
                this.props.navigation.navigate('User', { user: item.by })}
              onPressComments={() =>
                this.props.navigation.navigate('Comments', { kids: item.kids })}
            />
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
        {openedItem && (
          <WebView source={{ uri: openedItem.url }} style={styles.webview} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    flex: 1
  },
  separator: {
    borderBottomColor: Colors.greyText,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 16
  },
  webview: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    flex: 1
  }
});
