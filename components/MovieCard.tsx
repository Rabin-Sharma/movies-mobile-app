import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { TMDB_CONFIG } from '@/services/api'

const MovieCard = ({ item }: any) => {
    // console.log(item.id)
    return (
        <Link href={`/movie/${item.id}`} asChild>
            <TouchableOpacity className='w-[30%] mb-3'>
                <Image
                    source={{
                        uri: item.poster_path ?
                            TMDB_CONFIG.IMAGE_BASE_URL + item.poster_path :
                            'https://placehold.co/600x400/000000/FFFFFF/png'
                    }}
                    className='w-full h-52 rounded-lg'
                    resizeMode='cover'

                />
                <Text className='text-white'>{item.title}</Text>
            </TouchableOpacity>
        </Link>
    )
}

export default MovieCard