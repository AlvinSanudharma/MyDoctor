import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DummyDoctor6} from '../../assets';
import {Header, List} from '../../components';
import {colors} from '../../utils';

const ChooseDoctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Pilih Dokter Anak"
        type="dark"
        onPress={() => navigation.goBack()}
      />
      <List
        onPress={() => {
          navigation.navigate('Chatting');
        }}
        profile={DummyDoctor6}
        name="Alexander Jannie"
        desc="Wanita"
        type="next"
      />
      <List
        onPress={() => {
          navigation.navigate('Chatting');
        }}
        profile={DummyDoctor6}
        name="Alexander Jannie"
        desc="Wanita"
        type="next"
      />
      <List
        onPress={() => {
          navigation.navigate('Chatting');
        }}
        profile={DummyDoctor6}
        name="Alexander Jannie"
        desc="Wanita"
        type="next"
      />
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
});
