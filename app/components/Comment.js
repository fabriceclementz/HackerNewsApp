import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CommentsList from './CommentsList';
import Colors from '../themes/Colors';
import { timeAgo } from '../utils';
import { fetchItems } from '../api';

class Comment extends React.Component {
  state = {
    comments: null
  };
  componentDidMount() {
    const { comment } = this.props;
    if (comment.kids !== undefined) {
      fetchItems(comment.kids, comments => this.setState({ comments }));
    }
  }
  render() {
    const { comment, onPressUser } = this.props;
    const { comments } = this.state;
    return (
      <View style={styles.comment}>
        <Text style={styles.by} onPress={onPressUser}>
          {comment.by} | {timeAgo(comment.time)} ago
        </Text>
        <Text style={styles.text}>{comment.text}</Text>
        {comments && <CommentsList sub={true} comments={comments} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  comment: {
    marginVertical: 16
  },
  by: {
    marginBottom: 8,
    color: Colors.blackText,
    fontWeight: 'bold',
    fontSize: 14
  },
  text: {
    color: Colors.blackText
  }
});

export default Comment;
