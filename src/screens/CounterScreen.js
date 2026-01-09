import { Text, View } from 'react-native';
import React, { useState } from 'react';
import AppButton from '../components/AppButton.js'

const CounterScreen = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
        <Text style={{ marginTop: 40 }}> Test 2 </Text>
      <Text> Expected Output </Text>

      <Text style={{ marginLeft: 40 }}>{count}</Text>
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <AppButton count={count} setCount={setCount} buttonName="Increment" color="red" onAction={() => setCount(count + 1)} />
        <AppButton count={count} setCount={setCount} buttonName="Decrement " color="green" onAction={() => setCount(count - 1)} />
        <AppButton count={count} setCount={setCount} buttonName="Reset "  color="yellow" onAction={() => setCount(0)}/>
      </View>
    </View>
  )
}
export default CounterScreen;