"use client";
import { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
  showButtons: false,
  tasks: [
    { id: 1, title: "task 1" },
    { id: 2, title: "task 2" },
    { id: 3, title: "task 3" },
  ],
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "toggleShowButtons":
      return { ...state, showButtons: !state.showButtons };
    case "reset":
      return initialState;
    case "addTask":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: state.tasks.length + 1, title: "new task" },
        ],
      };
    case "deleteTask":
      return {
        ...state,
        tasks: state.tasks.filter((task: any) => task.id !== action.id),
      };
    default:
      return state;
  }
};

export default function AdvancedUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="space-y-10">
      <h1 className="text-3xl">Advanced Use Reducer</h1>
      <h2 className="bg-slate-500 text-xl text-center p-5">
        first counter:{" "}
        <span className="text-red-500 text-5xl">{state.firstCounter}</span>
      </h2>
      <h2 className="bg-slate-500 text-xl text-center p-5">
        second counter:{" "}
        <span className="text-red-500 text-5xl">{state.secondCounter}</span>
      </h2>
      <button
        onClick={() => dispatch({ type: "toggleShowButtons" })}
        className="py-2 px-5 bg-amber-500 hover:bg-white text-white hover:text-amber-500 border-2 border-transparent hover:border-amber-500 rounded-lg active:scale-95"
      >
        show buttons
      </button>
      {state.showButtons && (
        <div className="flex flex-col items-center justify-center">
          <h3>counter 1 buttons</h3>
          <div className="space-x-5">
            <button
              onClick={() => dispatch({ type: "decrement", value: 1 })}
              className="py-2 px-5 bg-amber-500 hover:bg-white text-white hover:text-amber-500 border-2 border-transparent hover:border-amber-500 rounded-lg active:scale-95"
            >
              - 1
            </button>
            <button
              onClick={() => dispatch({ type: "increment", value: 1 })}
              className="py-2 px-5 bg-amber-500 hover:bg-white text-white hover:text-amber-500 border-2 border-transparent hover:border-amber-500 rounded-lg active:scale-95"
            >
              + 1
            </button>
          </div>
          <h3>counter 2 buttons</h3>
          <div className="space-x-5">
            <button
              onClick={() => dispatch({ type: "decrement2", value: 5 })}
              className="py-2 px-5 bg-amber-500 hover:bg-white text-white hover:text-amber-500 border-2 border-transparent hover:border-amber-500 rounded-lg active:scale-95"
            >
              - 5
            </button>
            <button
              onClick={() => dispatch({ type: "increment2", value: 5 })}
              className="py-2 px-5 bg-amber-500 hover:bg-white text-white hover:text-amber-500 border-2 border-transparent hover:border-amber-500 rounded-lg active:scale-95"
            >
              + 5
            </button>
          </div>
          <div>
            <button
              onClick={() => dispatch({ type: "reset" })}
              className="py-2 px-5 bg-amber-500 hover:bg-white text-white hover:text-amber-500 border-2 border-transparent hover:border-amber-500 rounded-lg active:scale-95"
            >
              Reset
            </button>
          </div>
        </div>
      )}
      <div>
        <h2>Tasks</h2>
        <ul>
          {state.tasks.map((task: any) => (
            <li className="flex gap-2 items-center p-2" key={task.id}>
              {task.title}

              <button
                onClick={() => dispatch({ type: "deleteTask", id: task.id })}
                className="py-2 px-5 bg-amber-500 hover:bg-white text-white hover:text-amber-500 border-2 border-transparent hover:border-amber-500 rounded-lg active:scale-95"
              >
                delete
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={() => dispatch({ type: "addTask" })}
          className="py-2 px-5 bg-amber-500 hover:bg-white text-white hover:text-amber-500 border-2 border-transparent hover:border-amber-500 rounded-lg active:scale-95"
        >
          add
        </button>
      </div>
    </div>
  );
}
