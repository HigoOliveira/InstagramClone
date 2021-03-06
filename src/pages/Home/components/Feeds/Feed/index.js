import React, { Component } from 'react';
import {  View, StyleSheet } from 'react-native';

import Header from './Header';
import Image from './Image';
import Actions from './Actions';
import Likes from './Likes';
import Comments from './Comments';
import Time from './Time';

export default class Feed extends Component {
  render() {

    const { user, images, likes, caption, comments, created_time } = this.props.feed;

    return (
      <View style={styles.container}>
        <Header user={user} />
        <Image images={images} />
        <Actions />
        <Likes likes={likes} />
        <Comments caption={caption} comments={comments} />
        <Time created_time={created_time} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
});
