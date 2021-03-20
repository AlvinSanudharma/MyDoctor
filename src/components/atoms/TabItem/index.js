import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IcDoctor,
  IcDoctorActive,
  IcHospitals,
  IcHospitalsActive,
  IcMessages,
  IcMessagesActive,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Doctor') {
      return active ? <IcDoctorActive /> : <IcDoctor />;
    } else if (title === 'Messages') {
      return active ? <IcMessagesActive /> : <IcMessages />;
    } else if (title === 'Hospitals') {
      return active ? <IcHospitalsActive /> : <IcHospitals />;
    } else {
      return <IcDoctor />;
    }
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: active => ({
    fontSize: 10,
    color: active ? colors.text.menuActive : colors.text.menuInactive,
    fontFamily: fonts.primary[600],
    marginTop: 4,
  }),
});
