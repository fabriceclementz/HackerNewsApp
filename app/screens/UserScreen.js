import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../themes/Colors';
import { fetchUser } from '../api';
import { timeAgo } from '../utils';

export default class UserScreen extends React.Component {
  state = {
    user: null
  };
  componentDidMount() {
    const { params } = this.props.navigation.state;
    fetchUser(params.user, user => this.setState({ user }));
  }
  render() {
    const { params } = this.props.navigation.state;
    const { user } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.username}>{params.user}</Text>
        {user && (
          <View style={{ paddingVertical: 16 }}>
            <Text style={styles.text}>
              Created: {timeAgo(user.created)} ago
            </Text>
            <Text style={styles.text}>Karma: {user.karma}</Text>
            <Text style={styles.text}>{user.about}</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 54,
    paddingHorizontal: 16
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.blackText
  },
  text: {
    color: Colors.blackText,
    paddingVertical: 8
  }
});
