import { Button, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Post from '../Components/Post';

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

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Posts</Text>
      <Post
        username="nicoleju"
        body="this is my first post"
      />
      {GIVEN_POSTS.map((x) => (
        <Post key={x._id} username={x.username} body={x.body} />
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
