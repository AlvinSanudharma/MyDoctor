import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import Other from './Other';
import IsMe from './IsMe';

const ChatItem = ({isMe, text, date, photo}) => {
  if (isMe) {
    return <IsMe text={text} date={date} />;
  }
  return <Other text={text} date={date} photo={photo} />;
};

export default ChatItem;

const styles = StyleSheet.create({});
