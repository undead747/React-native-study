import React from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'

import styles from './nearbyjobs.style'
import { COLORS, SIZES } from '../../../constants';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import useFetch from '../../../hook/useFetch';
import { useRouter } from 'expo-router';

const Nearbyjobs = () => {
  const { data, isLoading, error } = useFetch('search', {
    query: 'Python developer in Texas, USA',
    num_pages: '1',
    page: '1'
  })

  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Near by jobs</Text>
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
                data?.map(job => (
                  <NearbyJobCard job={job}
                              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
                  />
                ))
        }
      </View>
    </View>
  )
}

export default Nearbyjobs