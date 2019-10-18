import React, {useState} from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth'
import axios from 'axios'

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
const [newLogin, setNewLogin]= useState({ username:'', password:''})

const handleChange = event => {
  setNewLogin({
    ...newLogin,
    [event.target.name]:event.target.value
  });

}

const handleLogin = event => {
  event.preventDefault();

 axios
      .post('http://localhost:5000/api/login', newLogin)
       .then(response => {
          localStorage.setItem('token', response.data.payload);
          props.history.push('/protected')
      })
      .catch(err => console.log(err.response));



}

  return (
    <>
          <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        name="username"
                        value={newLogin.username}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        value={newLogin.password}
                        onChange={handleChange}
                    />
                    <button>Log in</button>


                </form>
    </>
  );
};

export default Login;
