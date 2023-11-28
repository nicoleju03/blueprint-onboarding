import { Button, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Post from '../Components/Post';
import InteractivePost from '../Components/InteractivePost';
import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native'; 


export default function Feed({ navigation }) {
  const GIVEN_POSTS = [
    {
      _id: 1,
      username: 'James',
      body: 'Mobile development is fun!',
    },
    {
      _id: 2,
      username: 'Sidd',
      body: 'I just finished watching another movie. It was interesting, but kind of boring :(',
    },
    {
      _id: 3,
      username: 'Jerry',
      body: 'I am excited to see everyone become friends!',
    },
  ];

  const navigateToLanding = () => {
    navigation.navigate('Landing');
  };

  const navigateToDetails = (username,body,time) => {
    navigation.navigate('PostDetails', {username,body,time})
  };

  const [postArray, setPostArray] = useState([]);
  const [id, setId] = useState(0);
  
  const updatePostArray = (name, bd, tm) => {
    newPost = {_id: id, username: name, body: bd, time:tm}
    newArray = [...postArray];
    newArray.push(newPost);
    setPostArray(newArray);
    setId(id+1);
  }


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Text>Posts</Text>
      <Post
        username="nicoleju"
        body="this is my first post"
      />
      {GIVEN_POSTS.map((x) => (
        <Post key={x._id} username={x.username} body={x.body} />
      ))} */}
      <InteractivePost updateParentArray={updatePostArray}/>
      {postArray.map((x) => (
        <Post key={x._id} username={x.username} body={x.body} navigateToDetails={navigateToDetails} time={x.time}/>
      ))}
      <Button
        title="To Landing"
        onPress={navigateToLanding}
      />
    </View>
  );
}

Feed.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
