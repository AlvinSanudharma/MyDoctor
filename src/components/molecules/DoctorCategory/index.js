import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILCatUmum, ILCatPsikiater, ILCatObat, ILCatAnak} from '../../../assets';
import {colors, fonts} from '../../../utils';

const DoctorCategory = ({category}) => {
  const Icon = () => {
    if (category === 'dokter umum') {
      return <ILCatUmum style={styles.illustration} />;
    } else if (category === 'psikiater') {
      return <ILCatPsikiater style={styles.illustration} />;
    } else if (category === 'dokter obat') {
      return <ILCatObat style={styles.illustration} />;
    } else if (category === 'dokter anak') {
      return <ILCatAnak style={styles.illustration} />;
    } else {
      return <ILCatUmum style={styles.illustration} />;
    }
  };

  return (
    <View style={styles.container}>
      <Icon />
      <Text style={styles.label}>Saya butuh</Text>
      <Text style={styles.category}>{category}</Text>
    </View>
  );
};

export default DoctorCategory;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.cardLight,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
    width: 100,
    height: 130,
  },
  illustration: {
    marginBottom: 28,
  },
  label: {
    fontFamily: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.primary,
  },
  category: {
    fontFamily: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
