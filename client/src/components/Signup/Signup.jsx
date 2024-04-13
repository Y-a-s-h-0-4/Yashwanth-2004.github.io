import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import './Signup.css'
import axios from 'axios'
import { useState } from "react";

function Signup() {

  let navigate = useNavigate()
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let [err, setErr] = useState('')

  //handle form submit
  async function handleFormSubmit(newUser) {
    if (newUser.userType === 'user') {
      // make http post req
      let res = await axios.post('http://localhost:4000/user-api/user', newUser)
      if (res.data.message === 'user created') {
        // navigate to login
        navigate('/signin')
      } else {
        setErr(res.data.message)
      }
    }else{
      // make http post req
      let res = await axios.post('http://localhost:4000/author-api/author',newUser)
      if(res.data.message === 'author created'){
        // navigate to login
        navigate('/signin')
      }else{
        setErr(res.data.message)
      }
    }
  }

  return (
    <div className="mx-auto mt-5 main-div shadow border-rounded">
      <h1 className="mb-2 text-center">Signup Form</h1>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div>

          {/* display user signup error message */}
          {err.length !== 0 && <p className="text-danger text-center fs-3">**{err}**</p>}

          {/* userType */}
          <div className="row justify-content-around mb-2">
            {/* Author */}
            <div className="col-3 form-check">
              <input type="radio" id="author" className="form-check-input shadow-sm custom-input" value="author" {...register("userType", { required: true })}></input>
              <label htmlFor="author" className="form-check-label">Author</label>
            </div>
            {/* User */}
            <div className="col-3 form-check">
              <input type="radio" id="user" className="form-check-input shadow-sm custom-input" value="user" {...register("userType", { required: true })} />
              <label htmlFor="user" className="form-check-label">User</label>
            </div>
             {/* validation error message of UserType */}
             {errors.userType?.type === "required" && (
              <p className="text-danger">UserType is required</p>
            )}
          </div>

          {/* username */}
          <div className="mb-2">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" id="username" className="form-control shadow-sm custom-input" {
              ...register("username", {
                required: true,
                minLength: 4,
                maxLength: 12
              })} />
            {/* validation error message of Username */}
            {errors.username?.type === "required" && (
              <p className="text-danger">Username is required</p>
            )}
            {errors.username?.type === "minLength" && (
              <p className="text-danger">Min length should be 4</p>
            )}
            {errors.username?.type === "maxLength" && (
              <p className="text-danger">Max length should be 12</p>
            )}
          </div>

          {/* password */}
          <div className="mb-2">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" id="password" className="form-control shadow-sm custom-input" {
              ...register("password", {
                required: true
              })} />
            {/* validation error message of Password*/}
            {errors.password?.type === "required" && (
              <p className="text-danger">Password is required</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-2">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" className="form-control shadow-sm custom-input" {...register("email", { required: true })} />
            {/* validation error message of email */}
            {errors.email?.type === "required" && (
              <p className="text-danger">Email is required</p>
            )}
          </div>

        </div>
        <button className="btn btn-success d-block mb-2 mt-4 mx-auto">Signup</button>
      </form>
      <p className="lead">
        Already registered?
        <Link to='/signin' className="fs-4 p-2 t">Signin</Link>
      </p>
    </div>
  );
}

export default Signup;