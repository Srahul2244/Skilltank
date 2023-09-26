import React, { useState } from "react";
import { TEInput, TERipple } from "tw-elements-react";
import Signup from "./Signup";

const Login = () => {
  const [showLogin, setShowLogin] = useState(true); // Initially show the login form

  const showLoginForm = () => {
    setShowLogin(true); // Show the login form
  };

  const showSignupForm = () => {
    setShowLogin(false); // Show the signup form
  };

  return (
    <section
      className="h-[800px] bg-neutral-200"
      style={{
        background:
          "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
      }}
    >
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-[600px]">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800 ">
              <div>
                <div className="px-4 md:px-0 lg:w-full">
                  <div className="md:mx-6 md:p-12">
                    <div className="text-center">
                      <h1 className="mb-12 mt-1 pb-1 text-[64px] font-extrabold">
                        {showLogin ? "Login Form" : "Signup Form"}
                      </h1>
                    </div>

                    <div className="mb-4 text-center">
                      <button
                        className={`mr-4 text-[30px] border-2 w-40   font-medium rounded-md ${showLogin
                          ? "text-white bg-red-400"
                          : "text-black "}`}
                        // style={{
                        //   background:
                        //     "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                        // }}
                        onClick={showLoginForm}
                      >
                        Login
                      </button>
                      <button
                        className={`font-medium text-[30px] border-2 w-40 rounded-md ${!showLogin
                          ? "text-white  bg-red-400"
                          : "text-black"}`}
                        onClick={showSignupForm}
                      >
                        Signup
                      </button>
                    </div>

                    {showLogin ? ( // Display login form when showLogin is true
                      <form>
                        <TEInput
                          type="text"
                          placeholder="Email Address"
                          className="mb-4 h-14 border-4 border-black-400"
                        />
                        {/* Password input */}
                        <TEInput
                          type="password"
                          placeholder="Password"
                          className="mb-4 h-14 border-4 border-black-400"
                        />
                        {/* Forgot password link */}
                        <a href="#!" className="text-red-500 font-semibold">
                          Forgot password?
                        </a>
                        {/* Submit button */}
                        <div className="mb-12 pb-1 pt-1 text-center">
                          <TERipple rippleColor="light" className="w-full">
                            <button
                              className="full h-12 mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] text-xl"
                              type="button"
                              style={{
                                background:
                                  "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                              }}
                            >
                              Login
                            </button>
                          </TERipple>
                        </div>
                        {/* Register button */}
                        <div className="w-full">
                          <p className="mb-0 mr-2 text-center text-[20px]">
                            Not a member?
                            <span
                              style={{
                                color: "#b44593",
                                cursor: "pointer",
                              }}
                              onClick={showSignupForm}
                            >
                              Signup now
                            </span>
                          </p>
                        </div>
                      </form>
                    ) : (
                      // Display signup form when showLogin is false
                      <Signup showlogin={showLoginForm} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
