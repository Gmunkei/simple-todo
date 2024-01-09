import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ToDoProps } from "myTypes";
import ToDoList from "./ui/components/ToDoList";

const todoDataList: ToDoProps[] = [
  { description: "mow the lawn", markAsDone: false },
  {
    description: "pay the utilities",
    markAsDone: false,
  },
  { description: "get ripped", markAsDone: true },
];

const todoContainer = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  border: "0px solid #0085f2",
};

function App() {
  return (
    <>
      <div style={todoContainer}>
        {todoDataList.map((item, index) => (
          <ToDoList
            description={item.description}
            index={index}
            markAsDone={item.markAsDone}
            dateComplete={item.dateComplete}
          ></ToDoList>
        ))}
      </div>
    </>
  );
}

export default App;
