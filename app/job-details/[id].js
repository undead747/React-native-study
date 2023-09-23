import React from 'react'
import { ActivityIndicator, RefreshControl, SafeAreaView, Text, View } from 'react-native'
import { useCallback, useState } from 'react'
import {Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics} from '../../components'
import { Stack, useRouter, useSearchParams } from 'expo-router'
import useFetch from '../../hook/useFetch'
import { COLORS, SIZES, icons } from '../../constants'
import { ScrollView } from 'react-native-gesture-handler'

const JobDetails = () => {
  const params = useSearchParams();
  const router = useRouter();

  const {data, isLoading, error, fetchData} = useFetch('job-details', {
    job_id: params.id 
  })

  const [refreshing, setRefreshing] = useState();
  const onRefresh = () => {};

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
        <Stack.Screen options={{
          headerStyle: {backgroundColor: COLORS.lightWhite},
          headerBackgroundVisible: false,
          headerBackVisible: false,
          headerLeft: () => {
            <ScreenHeaderBtn iconUrl={icons.left} dimension={'60%'} handlePress={() => router.back()} />
          },
          headerRight: () => {
            <ScreenHeaderBtn iconUrl={icons.share} dimension={'60%'} />
          },
          headerTitle: ''
        }}>
            <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}> 
                {
                  isLoading ? (
                     <ActivityIndicator size={"large"} color={COLORS.primary} /> 
                  ) : error ? <Text>There something wrong !</Text> : data?.length === 0 ? <Text>No Data</Text> : (
                  <View style={{padding: SIZES.medium, paddingBottom: 100}}>
                  </View>
                  ) 
                }
            </ScrollView>          
        </Stack.Screen>
    </SafeAreaView>
  )
}

export default JobDetails