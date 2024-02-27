"use client";
import { useReducer } from "react";

const initialState = 0;

const reducer = (count: number, action: any) => {
  switch (action) {
    case "INC":
      return count + 1;
    case "DEC":
      return count - 1;
    case "RESET":
      return initialState;
    default:
      throw new Error("Something went wrong");
  }
};

export default function SimplyUseReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="p-10 flex flex-col items-center">
      <h1 className="text-xl font-bold">{count}</h1>
      <div className="space-x-3">
        <button
          className="px-6 py-4 bg-red-700 rounded-lg text-white active:scale-90"
          onClick={() => dispatch("DEC")}
        >
          -1
        </button>
        <button
          className="px-6 py-4 bg-red-700 rounded-lg text-white active:scale-90"
          onClick={() => dispatch("INC")}
        >
          +1
        </button>
        <button
          className="px-6 py-4 bg-red-700 rounded-lg text-white active:scale-90"
          onClick={() => dispatch("RESET")}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
