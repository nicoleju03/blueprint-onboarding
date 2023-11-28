import { Button, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Post from '../Components/Post';
import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native'; 

export default function PostDetails({navigation}) {
  const route = useRoute()
  const name = route.params?.username
  const body = route.params?.body
  const time = route.params?.time
  console.log(body)

  const navigateToFeed = () => {
    navigation.navigate('Feed');
  };
  const navigateToLanding = () => {
    navigation.navigate('Landing');
  };

  return (
    <>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>username: {name}</Text>
      <Text>post body: {body}</Text>
      <Text>time: {time}</Text>
      <Button
        title="To Feed"
        onPress={navigateToFeed}
      />
      <Button
        title="To Landing"
        onPress={navigateToLanding}
      />
    </View>
    </>
  );
}

