import React from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'

import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants';
import PopularjobCard from '../../common/cards/popular/PopularJobCard';
import useFetch from '../../../hook/useFetch';

const Popularjobs = () => {
  const {data, isLoading, error} = useFetch('search', {
      query: 'Python developer in Texas, USA',
      num_pages: '1',
      page: '1'
  })

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {
          isLoading ? (
            <ActivityIndicator size={'large'} colors={COLORS.primary} />) :
            error ? (
              <Text>Something went wrongs</Text>) :
              <FlatList
                data={data}
                renderItem={({item}) => (
                  <PopularjobCard item={item} />
                )}
                keyExtractor={item => item?.job_id}
                contentContainerStyle={{columnGap: SIZES.medium}}
                horizontal
              />
        }
      </View>
    </View>
  )
}

export default Popularjobs