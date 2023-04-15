import React, { useRef } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  useWindowDimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import useCountdownTimer from '../hooks/useCountdown';
import { colors } from '../constants';
import TextInput from './components/TextInput';

function CountdownTimer() {
  const refInputHours = useRef(null);
  const refInputMinutes = useRef(null);
  const refInputSeconds = useRef(null);

  const {
    seconds,
    setSeconds,
    minutes,
    setMinutes,
    hours,
    setHours,
    isActive,
    setIsActive,
    counter,
    setCounter,
  } = useCountdownTimer();

  const handleStart = () => {
    const newCounter = hours * 3600 + minutes * 60 + seconds;
    setCounter(newCounter);
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setCounter(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  const handleHourChange = (text) => {
    setHours(isNaN(parseInt(text)) ? 0 : parseInt(text));
  };

  const handleMinuteChange = (text) => {
    setMinutes(isNaN(parseInt(text)) ? 0 : parseInt(text));
  };

  const handleSecondChange = (text) => {
    setSeconds(isNaN(parseInt(text)) ? 0 : parseInt(text));
  };

  return (
    <View style={{ flex: 1, width: '100%' }}>
      <LinearGradient
        colors={[colors.purple, colors.pink]}
        start={{ x: 0.5, y: 0.5 }}
        end={{ x: 0.9, y: 1 }}
        style={styles.container}
      >
        <Image
          source={require('../assets/svg.png')}
          style={styles.imageWave}
        />
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
            <TextInput
              ref={refInputHours}
              display={hours.toString().padStart(2, '0')}
              label='HOURS'
              value={hours.toString()}
              onChangeText={handleHourChange}
              disabled={isActive}
            />
            <Text style={styles.colon}>:</Text>
            <TextInput
              ref={refInputMinutes}
              display={minutes.toString().padStart(2, '0')}
              label='MINUTES'
              value={minutes.toString()}
              onChangeText={handleMinuteChange}
              disabled={isActive}
            />
            <Text style={styles.colon}>:</Text>
            <TextInput
              ref={refInputSeconds}
              display={seconds.toString().padStart(2, '0')}
              label='SECONDS'
              value={seconds.toString()}
              onChangeText={handleSecondChange}
              disabled={isActive}
            />
          </View>
        </View>
        <View style={styles.actions}>
          <TouchableOpacity style={{ opacity: 0.5 }}>
            <Ionicons
              name='clipboard-outline'
              size={32}
              color={colors.white}
            />
          </TouchableOpacity>
          <View>
            <TouchableOpacity
              onPress={isActive ? handlePause : handleStart}
              style={styles.mainAction}
            >
              {isActive ? (
                <Ionicons
                  name='pause-outline'
                  size={40}
                  color={colors.white}
                />
              ) : (
                <Ionicons
                  name='play-sharp'
                  size={40}
                  color={colors.white}
                  style={{ marginLeft: 8 }}
                />
              )}
            </TouchableOpacity>
            <Text style={styles.mainActionText}>
              {isActive ? 'PAUSE' : 'START'}
            </Text>
          </View>
          <TouchableOpacity
            onPress={handleReset}
            style={{ opacity: 0.5 }}
          >
            <Ionicons
              name='trash-outline'
              size={32}
              color={colors.white}
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageWave: {
    width: '100%',
    height: 130,
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 1,
  },
  colon: {
    fontSize: 50,
    color: colors.white,
    marginTop: 6,
    marginHorizontal: 2,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 24,
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

export default CountdownTimer;
