import axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router";
import { ThemeContext } from '../../Store/Context';

const RegisterComponent = () => {
  const navigate = useNavigate()
  const {setUser} = useContext(ThemeContext)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleCallApiUser = async () =>{
    axios({
      method: 'get',
      url: 'https://randomuser.me/api/',
    })
      .then(function (response) {
        const data = response.data.results[0];
        const user = {
        name: data.name.first + data.name.last,
        image: data.picture.medium,
      };
      console.log(data)
      setUser(user);
      });
  }

  const onSubmit = (data) => {
    if (data.userName && data.password) {
      handleCallApiUser()
      navigate('/');  
    }
  };


  return (
    <div className="w-100">
      <form
        className="d-flex flex-column w-25 justify-center ma-2 m-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="userName">Username:</label>
        <input
          className="form-control"
          placeholder="Enter your username"
          {...register("userName")}
        />

        <label className="mt-1" htmlFor="password">
          Password:
        </label>
        <input
          className="form-control"
          placeholder="Enter your password"
          {...register("password")}
        />

        <input className="btn btn-success w-100 mt-3" type="submit" />
      </form>
    </div>
  );
};

export default RegisterComponent;
