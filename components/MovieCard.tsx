import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { TMDB_CONFIG } from '@/services/api'
import { icons } from '@/constants/icons'

const MovieCard = ({ item }: any) => {
    // console.log(item.id)
    return (
        <Link href={`/movie/${item.id}`} asChild>
            <TouchableOpacity className='w-[30%] mb-3'>
                <Image
                    source={{
                        uri: item.poster_path ?
                            TMDB_CONFIG.IMAGE_BASE_URL + item.poster_path :
                            'https://placehold.co/180x400/20383b/FFFFFF/png?text='+item.title
                    }}
                    className='w-full h-52 rounded-lg'
                    resizeMode='cover'

                />
                <Text className='text-white' numberOfLines={1}>{item.title}</Text>
                <View className='flex-row items-center justify-start gap-x-1'>
                    <Image source={icons.star} className='size-4'></Image>
                    <Text className='text-xs text-white font-bold uppercase'>{Math.round(item.vote_average / 2)}</Text>
                </View>
                <View className='flex-row items-center justify-between'>
                    <Text className='text-xs text-light-300 font-medium mt-1'>{item.release_date?.split('-')[0]}</Text>
                    {/* <Text className='text-xs text-light-300 font-medium uppercase'>Movie</Text> */}
                </View>
            </TouchableOpacity>
        </Link>
    )
}

export default MovieCard