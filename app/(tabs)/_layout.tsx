import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'

const TabBar = ({ title, focused, icon }: any) => {
  if (focused)
    return (
      <ImageBackground
        source={images.highlight}
        className='flex flex-row w-full min-w-[112px] flex-1 min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden'
      >
        <Image
          source={icon}
          tintColor="#151312"
          className='size-5' />

        <Text className='text-secondary text-base font-semibold ml-2'>{title}</Text>

      </ImageBackground>
    )


  return (
    <View className='size-full justify-center items-center rounded-full mt-4'>
      <Image
        source={icon}
        tintColor="#A8B5DB"
        className='size-5' />
    </View>
  )
}
const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center'
        },
        tabBarStyle: {
          backgroundColor: '#0f0d23',
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position: 'absolute',
          overflow: 'hidden',
          borderWidth: 0,
          borderColor: '#0f0d23'
      }
    }}
    >

      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <TabBar
              title="Home"
              focused={focused}
              icon={icons.home}
            />
          )
        }} />

      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          title: 'Search',
          tabBarIcon: ({ focused }) => (
            <TabBar
              title="Search"
              focused={focused}
              icon={icons.search}
            />
          )
        }} />

      <Tabs.Screen
        name="saved"
        options={{
          headerShown: false,
          title: 'Saved',
          tabBarIcon: ({ focused }) => (
            <TabBar
              title="Saved"
              focused={focused}
              icon={icons.save}
            />
          )
        }} />

      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <TabBar
              title="Profile"
              focused={focused}
              icon={icons.person}
            />
          )
        }} />

    </Tabs>
  )
}

export default _layout