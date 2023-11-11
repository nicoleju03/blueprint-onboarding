import { Text } from 'react-native';
import PropTypes from 'prop-types';

export default function Post({username, body}) {
  return (
    <>
      <Text>
        username: {username}
      </Text>
      <Text>
        body: {body}
      </Text>
    </>
  );
}

Post.propTypes = {
  username: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
