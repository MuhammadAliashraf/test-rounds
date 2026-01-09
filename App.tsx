import { Text, View, TouchableOpacity } from 'react-native';
import { users } from './src/utils/userUtils.js';
import React, { useState } from 'react';
import CounterScreen from './src/screens/CounterScreen.js'
import PostListScreen from './src/screens/PostListScreen.js'
function App() {

  return (
    <View>
      <Text> Test 1 </Text>
      <Text> Expected Output </Text>
      {users?.map(user => {
        if (user.isActive) {
          return (
            <Text key={user.id}>
              id: {user.id}, name: {user.name}, age: {user.age}`
            </Text>
          );
        }
      })}

      <CounterScreen />
      <PostListScreen />

    </View>
  );
}

export default App;
