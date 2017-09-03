import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Comment from './Comment';
import Colors from '../themes/Colors';
import { timeAgo } from '../utils';

const CommentsList = ({ comments, sub }) => (
  <View>
    {sub && <Text>Show...</Text>}
    {comments.map(comment => (
      <View key={comment.id}>
        <Comment
          comment={comment}
          onPressUser={() => {
            this.props.navigation.navigate('User', { user: comment.by });
          }}
        />
        <View style={styles.separator} />
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  separator: {
    borderBottomColor: Colors.greyText,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 16,
    marginVertical: 16
  }
});

export default CommentsList;
