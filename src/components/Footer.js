import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '../../constants';

const Footer = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ opacity: 0.5 }}>
        <Ionicons
          name='clipboard-outline'
          size={32}
          color={colors.white}
        />
      </TouchableOpacity>
      <View>
        <TouchableOpacity style={styles.mainAction}>
          {/* <Ionicons
            name='pause-outline'
            size={40}
            color={colors.white}
          /> */}
          <Ionicons
            name='play-sharp'
            size={40}
            color={colors.white}
            style={{ marginLeft: 8 }}
          />
        </TouchableOpacity>
        <Text style={styles.mainActionText}>PAUSE</Text>
      </View>
      <TouchableOpacity style={{ opacity: 0.5 }}>
        <Ionicons
          name='trash-outline'
          size={32}
          color={colors.white}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingBottom: 24,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  mainAction: {
    width: 80,
    height: 80,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: colors.white,
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainActionText: {
    color: colors.white,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 500,
  },
});

export default Footer;
