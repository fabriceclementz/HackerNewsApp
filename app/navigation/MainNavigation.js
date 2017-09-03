import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import StoriesScreen from '../screens/StoriesScreen';
import UserScreen from '../screens/UserScreen';
import CommentsScreen from '../screens/CommentsScreen';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../themes/Colors';

const StoriesNavigation = TabNavigator(
  {
    Main: {
      screen: props => <StoriesScreen {...props} storyType="top" />,
      navigationOptions: {
        tabBarLabel: 'Top',
        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-trending-up" />
      }
    },
    New: {
      screen: props => <StoriesScreen {...props} storyType="new" />,
      navigationOptions: {
        tabBarLabel: 'New',
        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-trending-up" />
      }
    },
    Show: {
      screen: props => <StoriesScreen {...props} storyType="show" />,
      navigationOptions: {
        tabBarLabel: 'Show',
        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-trending-up" />
      }
    },
    Ask: {
      screen: props => <StoriesScreen {...props} storyType="ask" />,
      navigationOptions: {
        tabBarLabel: 'Ask',
        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-trending-up" />
      }
    },
    Jobs: {
      screen: props => <StoriesScreen {...props} storyType="job" />,
      navigationOptions: {
        tabBarLabel: 'Jobs',
        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-trending-up" />
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.orange
    }
  }
);

const MainNavigation = StackNavigator(
  {
    MainStack: {
      screen: StoriesNavigation
    },
    User: {
      screen: UserScreen
    },
    Comments: {
      screen: CommentsScreen
    }
  },
  {
    headerMode: 'none',
    mode: 'modal'
  }
);

export default MainNavigation;
