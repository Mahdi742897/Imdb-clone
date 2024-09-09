"use client";
import { useEffect } from "react";
const Error = ({ error, reset }) => {

  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="text-center mt-20">
      <h1>something went wrong please try again</h1>
      <button
        onClick={() => reset()}
        className="hover:text-amber-600 py-2 px-4"
      >
        try again
      </button>
    </div>
  );
};

export default Error;
