import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'

import styles from './welcome.style'
import { SIZES, icons } from '../../../constants'
import { FlatList } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';

const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Welcome = () => {
  const [activeJobType, setActiveJobType] = useState('full-time');
  const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hi Minh</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=''
            onChange={() => { }}
            placeholder='What are you looking for?'
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => { setActiveJobType(item); router.push(`/search/${item}`) }}
            ><Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>)
          }
          keyExtractor={item => item}
          contentContainerStyle={{columnGap: SIZES.small}}
          horizontal
        /> 
      </View>
    </View>
  )
}

export default Welcome