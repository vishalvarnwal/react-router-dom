import React from "react";
import frame from "../assets/frame.png";
import loginImage from "../assets/login.png";
import signupImage from "../assets/signup.png";
import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignupForm";
import { FcGoogle } from "react-icons/fc";

export const Template = ({ title, desc1, desc2, formType, setIsLoggedIn }) => {
  return (
    <div className="py-12 mx-auto flex max-w-[1160px] w-11/12 justify-between">
      <div className="w-11/12 max-w-[450px]">
        <h1 className="text-richblack-5 text-[1.875rem] font-semibold leading-[2.375rem]">
          {title}
        </h1>
        <div className="description mt-4 text-[1.125rem] leading-[1.625rem]">
          <p className="text-richblack-100">{desc1}</p>
          <p className="text-blue-100 italic">{desc2}</p>
        </div>
        {formType === "signup" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}
        <div>
          <div className="flex w-full items-center my-4 gap-x-2">
            <div className="bg-richblack-700 h-[1px] w-full"></div>
            <p className="text-richblack-700 font-medium leading-[1.375rem]">
              OR
            </p>
            <div className="bg-richblack-700 h-[1px] w-full"></div>
          </div>
          <button className="w-full rounded-[8px] font-medium text-richblack-100 border border-richblack-700 flex justify-center gap-x-2 items-center mx-auto py-2">
            <FcGoogle /> Sing in with Google
          </button>
        </div>
      </div>
      <div className="relative w-11/12 max-w-[450px]">
        <img src={frame} alt="pattern" width={558} height={504} />
        <img
          className="absolute -top-4 -left-4"
          src={formType === "signup" ? signupImage : loginImage}
          width={558}
          height={504}
        />
      </div>
    </div>
  );
};
