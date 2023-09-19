import React from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'

import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants';
import PopularjobCard from '../../common/cards/popular/PopularJobCard';

const Popularjobs = () => {
  const isLoading = false;
  const error = false;

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
                data={[1, 2, 3, 4, 5]}
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