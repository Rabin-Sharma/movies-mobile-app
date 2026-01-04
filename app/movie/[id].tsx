import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useGlobalSearchParams, useSearchParams } from 'expo-router/build/hooks'

const MovieDetails = () => {
  const movie = useGlobalSearchParams();
  console.log(movie)
  return (
    <View className='flex items-center justify-center h-screen'>
      <Text className=''>{movie.id}</Text>
    </View>
  )
}

export default MovieDetails

const styles = StyleSheet.create({})