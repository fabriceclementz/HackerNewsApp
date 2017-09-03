import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Colors from '../themes/Colors';
import { timeAgo } from '../utils';

const Item = ({ item, onPress, onPressUser, onPressComments }) => (
  <View style={styles.item}>
    <Text style={styles.score}>{item.score}</Text>
    <View style={{ paddingLeft: 16 }}>
      <Text onPress={onPress} style={styles.title}>
        {item.title}
      </Text>
      <View style={{ flexDirection: 'row', marginTop: 8 }}>
        <TouchableWithoutFeedback onPress={onPressUser}>
          <View>
            <Text style={styles.by}>By {item.by}</Text>
          </View>
        </TouchableWithoutFeedback>
        <Text style={styles.time}> | {timeAgo(item.time)} ago</Text>
        {item.kids && (
          <TouchableWithoutFeedback onPress={onPressComments}>
            <View>
              <Text style={styles.comments}>
                {' '}
                | {item.kids.length} comments
              </Text>
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  item: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  score: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.orange
  },
  title: {
    color: Colors.blackText,
    fontWeight: 'bold'
  },
  by: {
    color: Colors.greyText
  },
  time: {
    color: Colors.greyText
  },
  comments: {
    color: Colors.greyText
  }
});

export default Item;
