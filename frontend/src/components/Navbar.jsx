import React from "react";
import image from "../Images/img.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = React.useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <div className=" w-11/12 flex justify-around mx-auto p-2">
        <div className="py-6 flex gap-2">
          <img className="h-10 w-10 rounded-full" src={image} alt="img" />
          <Link to="/">
            <h1 className="text-[#253558] font-bold text-[31px]">MR</h1>
          </Link>
        </div>
        <div className="py-6">
          <h1 className="text-[#333333] text-base font-normal ">
            {" "}
            /Part of Times <br></br> Higher Education
          </h1>
        </div>
        <ul className="lg:flex justify-between gap-16 hidden">
          <Link to="/">
            <li className="mx-4 text-[rgb(3,3,3)] text-base font-semibold py-9">
              {" "}
              HOME{" "}
            </li>
          </Link>
          <li className="mx-4 text-[#333333] text-base font-normal py-9">
            {" "}
            Offices{" "}
          </li>
          <li className="mx-4 text-[#333333] text-base font-normal py-9">
            {" "}
            Examinations{" "}
          </li>
          <li className="mx-4 text-[#333333] text-base font-normal py-9">
            {" "}
            Mentors
          </li>
          <li className="mx-4 text-[#333333] text-base font-normal py-9">
            {" "}
            Students{" "}
          </li>
          <li className="mx-4 text-[#333333] text-base font-normal py-9">
            {" "}
            Academics{" "}
          </li>
          <li className="mx-4 text-[#333333] text-base font-normal py-9"> </li>
          <div className="py-9 " onClick={handleClick}>
            <button
              type="button"
              className="block w-8 h-1 bg-gray-600 mb-1"
            ></button>
            <button
              type="button"
              className="block w-8 h-1 bg-gray-600 mb-1"
            ></button>
            <button
              type="button"
              className="block w-8 h-1 bg-gray-600"
            ></button>
          </div>
        </ul>
        <div className="py-9 lg:hidden" onClick={handleClick}>
          <button
            type="button"
            className="block w-8 h-1 bg-gray-600 mb-1"
          ></button>
          <button
            type="button"
            className="block w-8 h-1 bg-gray-600 mb-1"
          ></button>
          <button type="button" className="block w-8 h-1 bg-gray-600"></button>
        </div>
      </div>
      {visible && (
        <div className="shadow-lg w-[200px] lg:mx-[1300px] sm:mx-[600px] ">
          <Link to="/" className="block text-[#BF7506] py-2 px-4">
            Home
          </Link>

          <Link to="/login" className="block text-[#BF7506] py-2 px-4">
            Login
          </Link>
          <Link className="block text-[#BF7506] py-2 px-4">Students</Link>
          <Link className="block text-[#BF7506] py-2 px-4">Learn</Link>
          <Link className="block text-[#BF7506] py-2 px-4">Mentors</Link>
          <Link className="block text-[#BF7506] py-2 px-4">Compete</Link>
          <Link className="block text-[#BF7506] py-2 px-4">Jobs</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
