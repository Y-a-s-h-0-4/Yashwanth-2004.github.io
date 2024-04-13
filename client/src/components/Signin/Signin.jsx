import "./Signin.css";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { userAuthorLoginThunk } from "../../redux/slices/userAuthorSlice";
import { useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";

function Signin() {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let { isPending, currentUser, loginUserStatus, errorOccurred, errMsg } =
    useSelector((state) => state.userAuthoruserAuthorLoginReducer);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  function handleFormSubmit(userCred) {
    localStorage.setItem("userCred", JSON.stringify(userCred));
    dispatch(userAuthorLoginThunk(userCred));
  }

  useEffect(() => {
    if (loginUserStatus) {
      if (currentUser.userType === "user") {
        navigate("/user-profile");
      }
      if (currentUser.userType === "author") {
        navigate(`/author-profile/articles-by-author/${currentUser.username}`);
      }
    }
  }, [loginUserStatus]);

  return (
<div className="mx-auto mt-5 main-div shadow border-rounded">
      <h1 className="mb-2 text-center">Signin Form</h1>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div>
          {errorOccurred===true && <p className="text-danger text-center fs-3">**{errMsg}**</p>}
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
              })} />
            {/* validation error message of Username */}
            {errors.username?.type === "required" && (
              <p className="text-danger">Username is required</p>
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
 
        </div>
        <button className="btn btn-success d-block mb-2 mt-4 mx-auto ">Signin</button>
      </form>
      <p className="lead">
        New User?
        <Link to='/signup' className="fs-4 p-2 t">Signup</Link>
      </p>
    </div>
  );
}

export default Signin;