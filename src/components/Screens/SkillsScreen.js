import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';

import ScreenThreeImage from '../../../assets/images/skillsScreenImage.svg';
import DownArrow from '../../../assets/images/downArrow.svg';
import {w} from '../../constants';
import {Header} from '../Header';
import BackIcon from '../../../assets/images/backArrow.svg';
import MenuIcon from '../../../assets/images/menuIcon.svg';

export const SkillsSceen = ({navigation}) => {

  const value = new Date(1598051730000);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.wrapper}>

        <View style={styles.headerWrapper}>

          <TouchableOpacity style={styles.headerBack} onPress={() => navigation.goBack()}>
            <BackIcon width={12}/>
          </TouchableOpacity>

          <View style={styles.headerTitle}>
            <Text style={styles.headerTitleText}>Sign up</Text>
          </View>

          <TouchableOpacity style={styles.headerMenu}>
            <MenuIcon width={28}/>
          </TouchableOpacity>
        </View>



        <View style={styles.contentWrapper}>
          <View style={styles.contentTitle}>
            <Text style={styles.contentTitleText}>What skills do you have?</Text>
          </View>
          <View style={styles.contentImage}>
            <ScreenThreeImage width={w / 1.4}/>
          </View>
          <View style={styles.contentInputWrapper}>
            <TextInput style={styles.contentInput} textContentType={'name'} placeholder={'Skills'}/>
            <TouchableOpacity style={styles.downArrow}>
              <DownArrow width={30}/>
            </TouchableOpacity>
          </View>

          <View style={styles.paginationWrapper}>

            <View style={styles.paginationItem}/>
            <View style={styles.paginationItem}/>
            <View style={styles.paginationItemActive}/>


          </View>
        </View>

        <View style={styles.buttonsWrapper}>

          <TouchableOpacity style={styles.buttonSkip}>
            {/*<Text style={styles.buttonSkipText}>Skip</Text>*/}
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonNext}>
            <Text style={styles.buttonNextText}>Finish</Text>
          </TouchableOpacity>

        </View>

      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#F4B512',
    paddingVertical: 55,
    paddingHorizontal: 40,
    height: '100%',
  },
  headerWrapper: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 40,
  },
  headerBack: {},
  headerTitle: {},
  headerTitleText: {
    fontFamily: 'Pangram-Medium',
    fontSize: 18,
    lineHeight: 22,
    color: 'white',
  },
  headerMenu: {},
  contentWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentTitle: {
    marginBottom: 45,
  },
  contentTitleText: {
    fontFamily: 'Pangram-Bold',
    fontSize: 60,
    lineHeight: 70,
    color: 'white',
    textAlign: 'center',
  },
  contentImage: {
    marginBottom: 45,
  },
  contentInputWrapper: {
    marginBottom: 60,
  },
  contentInput: {
    backgroundColor: 'white',
    width: w / 1.4,
    height: 65,
    borderRadius: 500,
    paddingTop: 20,
    paddingLeft: 30,
    paddingBottom: 20,
    fontSize: 18,
    fontFamily: 'Pangram-Regular',
  },
  paginationWrapper: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: w / 3,
    marginBottom: 40,
  },
  paginationItemActive: {
    width: 25,
    height: 5,
    backgroundColor: 'white',
    borderRadius: 500,
  },
  paginationItem: {
    width: 25,
    height: 5,
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderRadius: 500,
  },
  buttonsWrapper: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonSkip: {
    paddingLeft: 5,
  },
  buttonSkipText: {
    fontFamily: 'Pangram-Regular',
    fontSize: 18,
    color: 'white',
  },
  buttonNext: {
    backgroundColor: '#1A1A1A',
    borderRadius: 500,
    width: 141,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonNextText: {
    fontFamily: 'Pangram-Bold',
    fontSize: 18,
    color: 'white',
  },
  downArrow: {
    position: 'absolute',
    top: '45%',
    right: 30,
  }
});
