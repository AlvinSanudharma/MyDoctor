import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  DoctorCategory,
  Gap,
  HomeProfile,
  NewsItem,
  RatedDoctor,
} from '../../components';
import {colors, fonts} from '../../utils';
import {
  JSONCategoryDoctor,
  DummyDoctor1,
  DummyDoctor2,
  DummyDoctor3,
} from '../../assets';

const Doctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperSection}>
            <Gap height={30} />
            <HomeProfile
              onPress={() => {
                navigation.navigate('UserProfile');
              }}
            />
            <Gap height={30} />
            <Text style={styles.welcome}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
          </View>
          <Gap height={16} />
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={32} />
                {JSONCategoryDoctor.data.map(item => {
                  return (
                    <DoctorCategory
                      key={item.id}
                      category={item.category}
                      onPress={() => {
                        navigation.navigate('ChooseDoctor');
                      }}
                    />
                  );
                })}
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <Gap height={30} />
          <View style={styles.wrapperSection}>
            <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
            <Gap height={16} />
            <RatedDoctor
              name="Alexa Rachel"
              desc="Pediatrician"
              avatar={DummyDoctor1}
              onPress={() => navigation.navigate('DoctorProfile')}
            />
            <RatedDoctor
              name="Sunny Frank"
              desc="Dentist"
              avatar={DummyDoctor2}
              onPress={() => navigation.navigate('DoctorProfile')}
            />
            <RatedDoctor
              name="Poe Min"
              desc="Podiatrist"
              avatar={DummyDoctor3}
              onPress={() => navigation.navigate('DoctorProfile')}
            />
            <Gap height={30} />
            <Text style={styles.sectionLabel}>Good News</Text>
          </View>
          <Gap height={16} />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    maxWidth: 209,
  },
  category: {flexDirection: 'row'},
  wrapperSection: {paddingHorizontal: 16},
  wrapperScroll: {marginHorizontal: -16},
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
