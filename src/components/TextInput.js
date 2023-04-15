import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput as TxtDefault,
  View,
} from 'react-native';
import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { colors } from '../../constants';

const TextInput = forwardRef((props, ref) => {
  const [showInput, setShowInput] = useState(false);
  const { keyboardType, label, display, disabled, ...rest } = props;

  useEffect(() => {
    if (disabled) {
      setShowInput(false);
    }
  }, [disabled]);

  return (
    <View>
      <Text
        onPress={() => {
          // Keyboard.dismiss();
          if (!disabled) {
            setShowInput(true);
            ref.current.focus();
          }
        }}
        style={[styles.timeLabel, { display: showInput ? 'none' : 'flex' }]}
      >
        {display}
      </Text>

      <TxtDefault
        ref={ref}
        style={[
          styles.input,
          {
            display: showInput ? 'flex' : 'none',
          },
        ]}
        keyboardType={keyboardType ?? 'numeric'}
        {...rest}
      />
      <Text style={{ color: colors.white, opacity: 0.5, textAlign: 'center' }}>
        {label}
      </Text>
    </View>
  );
});

const styles = StyleSheet.create({
  input: {
    fontSize: 62,
    height: 82,
    color: colors.white,
    justifyContent: 'center',
    textAlign: 'center',
  },
  timeLabel: {
    fontSize: 62,
    textAlign: 'center',
    color: colors.white,
    fontWeight: 200,
  },
});

export default TextInput;
