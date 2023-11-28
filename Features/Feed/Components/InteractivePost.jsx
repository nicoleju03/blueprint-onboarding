import { Button, TextInput } from 'react-native';
import React, { useState } from 'react';


import PropTypes from 'prop-types';

export default function InteractivePost({updateParentArray}) {
  const [username, setUsername] = useState('');
  const [body, setBody] = useState('');
  
//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };
//   const handleBodyChange = (e) => {
//     setBody(e.target.value);
//   };

  const handleFormSubmit = (e) => {
    date = new Date();
    updateParentArray(username,body,date.toISOString());
    setUsername('');
    setBody('');
    
  };
  
  return (
    <>
    <TextInput
      placeholder = "Enter username"
      onChangeText = {setUsername}
      value = {username}
    />
    <TextInput
      placeholder = "Enter body"
      onChangeText = {setBody}
      value = {body}
    />
    <Button title="Submit" onPress={handleFormSubmit}>
    </Button>

      {/* <form onSubmit={handleFormSubmit}>
        <label>
          Enter username
          <input
            type="text"
            onChange={handleUsernameChange}
          />
        </label>
        <label>
          Enter body
          <input
            type="text"
            onChange={handleBodyChange}
          />
        </label>
        <button type="submit" onClick={handleFormSubmit}>
        </button>
      </form> */}
    </>
  );
}

InteractivePost.propTypes = {
  updateParentArray: PropTypes.func.isRequired,
};

