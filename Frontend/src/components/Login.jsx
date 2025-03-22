import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  loginStart,
  loginSuccess,
  loginFailure,
} from "../redux/slices/authSlice";
import PrimaryButton from "../utils/PrimaryButton";
import SecButton from "../utils/SecButton";
import api from "../utils/api";
import { closeLogin,openRegister } from "../redux/slices/modalSlice";

function Login() {
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    dispatch(loginStart());

    try {
      const response = await api.post("/users/login", data,
        {headers: { "Content-Type": "application/json" }}
      ); // Uses baseURL automatically
      dispatch(loginSuccess(response.data));
    } catch (error) {
      dispatch(
        loginFailure(error.response?.data?.message || "Invalid credentials")
      );
    }
  };

  return (
    <div>
      <div className="h-fit md:w-96 w-72 border border-white rounded-xl pt-6 px-10 pb-12 bg-zinc-900 shadow-[0px_0px_20px_rgba(251,113,133,0.9)]">
        <button
          className="pl-[100%] text-white text-2xl hover:text-gray-300"
          onClick={() => dispatch(closeLogin())}
        >
          ✖
        </button>
        <h2 className="text-2xl text-center text-white font-semibold mb-10">
          LOGIN
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between items-center my-5">
            <label className="text-white font-semibold" htmlFor="username">
              Username:
            </label>
            <input
              {...register("username", { required: "Username is required" })}
              className="rounded-md px-1 w-28 md:w-52"
              type="text"
              id="username"
              name="username"
              placeholder="username"
            />
          </div>
          {errors.username && (
            <p className="text-red-500 text-sm text-right">
              {errors.username.message}
            </p>
          )}

          <div className="flex justify-between items-center my-5">
            <label className="text-white font-semibold" htmlFor="password">
              Password:
            </label>
            <input
              {...register("password", { required: "Password is required" })}
              className="rounded-md px-1 w-28 md:w-52"
              type="password"
              id="password"
              name="password"
              placeholder="password"
            />
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm text-right">
              {errors.password.message}
            </p>
          )}

          {/* Display authentication error message */}
          {error && (
            <p className="text-red-500 text-sm text-center mt-2">{error}</p>
          )}

          <div className="flex flex-col gap-5 mt-10">
            <PrimaryButton type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </PrimaryButton>
            <hr />
            <SecButton onClick={()=> {dispatch(closeLogin()); dispatch(openRegister())}}>Sign up</SecButton>
          </div>
          <h3 className="mt-4 text-blue-400 hover:font-semibold text-center cursor-pointer">
            Forget Password!
          </h3>
        </form>
      </div>
    </div>
  );
}

export default Login;
