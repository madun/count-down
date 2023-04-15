import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '../../constants';

const Header = () => {
  return (
    <View style={styles.container}>
      <Ionicons
        name='ios-menu-outline'
        size={32}
        color={colors.purple}
      />
      <Text style={styles.title}>Before Go-live</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 400,
    color: colors.purple,
    textAlign: 'center',
    position: 'absolute',
    right: 0,
    left: 0,
  },
});

export default Header;
