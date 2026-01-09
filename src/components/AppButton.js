import { Text, View, TouchableOpacity } from 'react-native';
import { users } from './src/utils/userUtils.js';
import React, { useState } from 'react';

const AppButton = ({ count, setCount, buttonName, color, onAction }) => {
  return (
        <TouchableOpacity
              style={{ backgroundColor: color, padding: 5 }}
              onPress={onAction}
            >
              <Text>{buttonName}</Text>
        </TouchableOpacity>
  )
}
export default AppButton;