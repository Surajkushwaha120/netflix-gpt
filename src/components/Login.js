import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)

const toggleSignInForm = () => {
  setIsSignInForm(!isSignInForm);

}

  return (
    <div>
      <Header />
      <div>
        <img
          className="w-full absolute"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1280,h_720,q_75,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs"
          alt="bgimg"
        />
      </div>
      <form className="bg-black absolute p-12 w-3/12  my-36 mx-auto right-0 left-0 rounded-md text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

       {!isSignInForm && <input
          type="text"
          placeholder="Email Address"
          className="p-3 my-4 w-full bg-gray-700"
        />}

        <input
          type="text"
          placeholder="Email Address"
          className="p-3 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="password"
          className="p-3 my-4 w-full bg-gray-700"
        />
        
        <button className="p-4 my-6 bg-red-700 rounded-md w-full">
        {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
        {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered Sign in Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
