import { Text, View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { fetchData } from '../services/api.js';
const PostListScreen= () => {
    const [data, setData] = useState([]);const fetchData = () => {

    }

    useEffect(() => {
        fetchData();
    },[])

    const renderData = (d) => {
        console.log(d);
        return(
            <View>
                <Text>{d?.title}</Text>
            </View>
        )
    }

  return (
    <View>
        <Text style={{ marginTop: 40 }}> Test 3 </Text>
      <Text> Expected Output </Text>
      <FlatList 
        keyExtractor={ (item) => item.id.toString() }
        data={data}
        renderItem={(d) => renderData(d)}
      />
      
    </View>
  )
}
export default PostListScreen;