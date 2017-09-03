import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import CommentsList from '../components/CommentsList';
import Colors from '../themes/Colors';
import { timeAgo } from '../utils';
import { fetchItems } from '../api';

export default class UserScreen extends React.Component {
  state = {
    comments: []
  };
  componentDidMount() {
    const { params } = this.props.navigation.state;
    fetchItems(params.kids, comments => this.setState({ comments }));
  }
  render() {
    const { params } = this.props.navigation.state;
    const { comments } = this.state;
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Comments ({params.kids.length})</Text>
        <CommentsList comments={comments} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 54,
    paddingHorizontal: 16
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.blackText,
    marginBottom: 16
  }
});
