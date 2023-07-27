import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [signupFormData, setSignupFormData] = useState({
    f_name: "",
    l_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [accountType, setAccountType] = useState("student");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const onChangeHandler = (event) => {
    const value = event.target.value;
    setSignupFormData((prevData) => ({
      ...prevData,
      [event.target.name]: value,
    }));
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (signupFormData.password !== signupFormData.confirmPassword) {
      toast.error("Password do not match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account created");
    let finalUpdatedFormData = { ...signupFormData, accountType };
    console.log("printing signup formdata", finalUpdatedFormData);
    navigate("/dashboard");
  };
  return (
    <div>
      {/* student instructor tab */}
      <div className="flex gap-x-1 text-white p-1 my-6 rounded-full bg-richblack-800 max-w-max">
        <button
          className={`${
            accountType === "student"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200"
          } rounded-full px-5 py-2 transition-all duration-200`}
          onClick={() => {
            setAccountType("student");
          }}
        >
          Student
        </button>
        <button
          className={`${
            accountType === "instructor"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200"
          } rounded-full px-5 py-2 transition-all duration-200`}
          onClick={() => {
            setAccountType("instructor");
          }}
        >
          instructor
        </button>
      </div>
      <form onSubmit={submitHandler}>
        <div className="flex justify-between gap-4 mb-5">
          <label className="w-11/12">
            <p className="text-[0.875rem] text-richblack-5 leading-[1.375rem] mb-1">
              First Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
              name="f_name"
              required
              type="text"
              value={signupFormData.f_name}
              onChange={onChangeHandler}
              placeholder="Enter first name"
            />
          </label>
          <label className="w-11/12">
            <p className="text-[0.875rem] text-richblack-5 leading-[1.375rem] mb-1">
              Last Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
              name="l_name"
              required
              type="text"
              value={signupFormData.l_name}
              onChange={onChangeHandler}
              placeholder="Enter last name"
            />
          </label>
        </div>
        <label>
          <p className="text-[0.875rem] text-richblack-5 leading-[1.375rem] mb-1">
            Email Address<sup className="text-pink-200">*</sup>
          </p>
          <input
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            name="email"
            required
            type="email"
            value={signupFormData.email}
            onChange={onChangeHandler}
            placeholder="Enter email address"
          />
        </label>
        <div className="flex justify-between gap-x-4 mt-5">
          <label className="w-11/12 relative">
            <p className="text-[0.875rem] text-richblack-5 leading-[1.375rem] mb-1">
              Create Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
              name="password"
              required
              type={showPassword ? "text" : "password"}
              value={signupFormData.password}
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
          </label>
          <label className="w-11/12 relative">
            <p className="text-[0.875rem] text-richblack-5 leading-[1.375rem] mb-1">
              Confirm Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
              name="confirmPassword"
              required
              type={showConfirmPassword ? "text" : "password"}
              value={signupFormData.confirmPassword}
              onChange={onChangeHandler}
              placeholder="Enter your Password"
            />
            <span
              className="absolute right-3 top-[38px] cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>
        <button className="w-full bg-yellow-50 rounded-[8px] font-medium text-black mt-6 px-[12px] py-[8px]">
          Create Account
        </button>
      </form>
    </div>
  );
};
