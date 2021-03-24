import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import Other from './Other';
import IsMe from './IsMe';

const ChatItem = ({isMe}) => {
  if (isMe) {
    return <IsMe />;
  }
  return <Other />;
};

export default ChatItem;

const styles = StyleSheet.create({});
