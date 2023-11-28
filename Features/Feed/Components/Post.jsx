import { Text, Button } from 'react-native';
import PropTypes from 'prop-types';

export default function Post({username, body, time, navigateToDetails}) {
  return (
    <>
      <Text>
        username: {username}
      </Text>
      <Text>
        body: {body}
      </Text>
      <Button title="Details" onPress={()=>navigateToDetails(username,body,time)}></Button>
    </>
  );
}

Post.propTypes = {
  username: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
