import React from "react";

interface Props {}

const Registermember = (props: Props) => {
  return (
    <div className="max-w-7xl mx-auto">
      <form
        action="submit"
        className="flex gap-10 pt-5 flex-col justify-evenly items-center text-coffee-2"
      >
        <div className="w-full">
          <label className="text-sm text-coffee-4" htmlFor="name">
            Name
          </label>
          <input
            className="bg-white w-full outline-none border-b border-coffee-2 bg-opacity-0"
            type="text"
          />
        </div>
        <div className="w-full">
          <label className="text-sm text-coffee-4" htmlFor="store">
            Store
          </label>
          <input
            className="bg-white w-full outline-none border-b border-coffee-2 bg-opacity-0"
            type="text"
          />
        </div>
        <div className="w-full">
          <label
            className="text-sm text-coffee-4 border-coffee-2"
            htmlFor="member"
          >
            Member
          </label>
          <input
            className="bg-white w-full outline-none border-b border-coffee-2 bg-opacity-0"
            type="text"
          />
        </div>
        <button className="uppercase font-extralight outline-none bg-coffee-4 hover:bg-opacity-75 bg-opacity-50 p-2 text-white rounded">
          Get Membership
        </button>
      </form>
    </div>
  );
};

export default Registermember;
