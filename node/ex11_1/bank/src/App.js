import React, { useRef, useState } from 'react';
import axios from 'axios';

const path = '/api/users';

function App() {
  const [users, setUsers] = useState(null);
  const [user, setUser] = useState(null);
  const [textArea, setTextArea] = useState('');
  const [deleteAnswer, setDeleteAnswer] = useState(null);
  const [input, setInput] = useState('');

  const getUsers = () => {
    axios.get(path).then(({ data }) => {
      setUsers(JSON.stringify(data));
    });
  };
  const getUser = () => {
    axios.get(`${path}/${input}`).then(({ data }) => {
      setUser(JSON.stringify(data));
    });
  };
  const deleteUser = () => {
    axios.delete(`${path}/${input}`).then(({ data }) => {
      setDeleteAnswer(JSON.stringify(data));
    });
  };
  const add = () => {};
  return (
    <>
      <button
        onClick={() => {
          getUsers();
        }}
      >
        GET ALL USERS
      </button>
      <button
        onClick={() => {
          getUser();
        }}
      >
        GET A USER
      </button>
      <button
        onClick={() => {
          deleteUser();
        }}
      >
        delete a user
      </button>

      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <textarea
        value={textArea}
        onChange={(e) => {
          setTextArea(e.target.value);
        }}
      />
      <button onClick={add}>ADD USER</button>
      {users && <div>{users}</div>}
      {user && <div>{user}</div>}
      {deleteAnswer && <div>{deleteAnswer}</div>}
      {textArea && <div>{textArea}</div>}
    </>
  );
}

export default App;
