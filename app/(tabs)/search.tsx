import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { images } from '@/constants/images'
import MovieCard from '@/components/MovieCard'
import useFetch from '@/services/useFetch'
import { fetchMovies } from '@/services/api'

const Search = () => {
    const {
        data: movies,
        loading: moviesLoading,
        error: moviesError
    } = useFetch(() => fetchMovies({
        query: "",
    }), true);

    return (
        <View className='flex-1 bg-primary'>
            <Image source={images.bg} className='flex-1 absolute w-full z-0' />
            <FlatList
                data={movies}
                renderItem={({ item }) => <MovieCard item={item} />}
                keyExtractor={(item) => item.id}
                className='px-5'
                numColumns={3}
                columnWrapperStyle={{
                    justifyContent: 'center',
                    gap: 16,
                    marginVertical: 16,
                }}
                contentContainerStyle={{ paddingBottom: 100 }}
            />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({})
