import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormDate] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const onChangeHandler = (event) => {
    const value = event.target.value;
    setFormDate((prevData) => ({ ...prevData, [event.target.name]: value }));
  };
  const submitHandler = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
    console.log("printing login formdata", formData);
    toast.success("Logged In");
    navigate("/dashboard");
  };
  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col w-full gap-y-4 mt-6"
    >
      <label className="w-full">
        <p className="text-[0.875rem] text-richblack-5 leading-[1.375rem] mb-1">
          Email Address<sup className="text-pink-200">*</sup>
        </p>
        <input
          className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
          name="email"
          required
          type="text"
          value={formData.email}
          onChange={onChangeHandler}
          placeholder="Enter email address"
        />
      </label>
      <label className="w-full relative">
        <p className="text-[0.875rem] text-richblack-5 leading-[1.375rem] mb-1">
          Password<sup className="text-pink-200">*</sup>
        </p>
        <input
          className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
          name="password"
          required
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={onChangeHandler}
          placeholder="Enter your Password"
        />
        <span
          className="absolute right-3 top-[38px] cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          )}
        </span>
        <Link to="#">
          <p className="text-xs mt-1 ml-auto max-w-max text-blue-100">
            Forgot Password
          </p>
        </Link>
      </label>
      <button className="w-full bg-yellow-50 rounded-[8px] font-medium text-black mt-6 px-[12px] py-[8px]">
        Sign In
      </button>
    </form>
  );
};
