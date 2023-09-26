import React from "react";
import { TEInput, TERipple } from "tw-elements-react";

const Signup = ({ showlogin }) => {
  return (
    <form>
      <label>Name</label>
      <TEInput
        type="text"
        placeholder="Name"
        className="mb-4 h-14 border-4 border-black-400"
      />
      <label>Email</label>
      <TEInput
        type="text"
        placeholder="Email Address"
        className="mb-4 h-14 border-4 border-black-400"
      />
      <label>Password</label>
      <TEInput
        type="password"
        placeholder="Password"
        className="mb-4 h-14 border-4 border-black-400"
      />

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
            Signup
          </button>
        </TERipple>
      </div>
      <div className="w-full">
        <p className="mb-0 mr-2 text-center text-[20px]">
          If you are registered please? {" "}
          <span
            style={{
              color: "#b44593",
              cursor: "pointer",
            }}
            onClick={showlogin}
          >
            Login
          </span>
        </p>
      </div>
    </form>
  );
};

export default Signup;
