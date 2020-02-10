import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native';
import BackIcon from '../../assets/images/backArrow.svg';
import MenuIcon from '../../assets/images/menuIcon.svg';
import {w} from '../constants';

export const Header = () => {
  return (
    <View style={styles.headerWrapper}>

      <TouchableOpacity style={styles.headerBack}>
        <BackIcon width={12}/>
      </TouchableOpacity>

      <View style={styles.headerTitle}>
        <Text style={styles.headerTitleText}>Sign up</Text>
      </View>

      <TouchableOpacity style={styles.headerMenu}>
        <MenuIcon width={28}/>
      </TouchableOpacity>
    </View>

  );
};


const styles = StyleSheet.create({
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

});
