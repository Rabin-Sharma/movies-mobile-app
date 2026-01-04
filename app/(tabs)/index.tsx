import { ActivityIndicator, FlatList, Image, ScrollView, Text, View } from "react-native";
import { Link, useRouter } from "expo-router";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import SearchBar from "@/components/SearchBar";
import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/api";
import MovieCard from "@/components/MovieCard";

export default function App() {
  const router = useRouter();

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError
  } = useFetch(() => fetchMovies({
    query: "",
  }), true);


  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="absolute w-full z-0"
      />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: '100%',
          paddingBottom: 10
        }}
      >
        <Image
          source={icons.logo}
          className="w-12 h-10 mx-auto mt-20 mb-5"
        />
        {moviesLoading ? (
          <ActivityIndicator
            size='large'
            color='#0000ff'
            className="mt-10 self-center"
          />
        ) : moviesError ? (
          <Text className="text-white">Error: {moviesError?.message}</Text>
        ) : (
          <View className="flex-1 mt-5">
            <SearchBar
              onPress={() => router.push('/(tabs)/search')}
              placeholder="Search movies, TV shows, genres..."
            />
            <>
              <Text className="text-lg text-white font-bold mt-5 mb-3">Latest Movies</Text>
              
              <FlatList
                data={movies}
                renderItem={({ item }) => (
                  <MovieCard 
                  item={item}
                  />
                )}
                keyExtractor={(item ) => item.id}
                numColumns={3}
                columnWrapperStyle={{ 
                  justifyContent: 'flex-start',
                  gap: 20,
                  paddingRight: 5,
                  marginBottom: 10,
                 }}
                 scrollEnabled={false}
              />
            </>
          </View>
        )}

      </ScrollView>
    </View>
  );
}