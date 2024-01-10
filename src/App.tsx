import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ToDoProps } from "myTypes";
import ToDoList from "./ui/components/ToDoList";

const todoDataList: ToDoProps[] = [
  { description: "mow the lawn", markAsDone: false, index: "abc123" },
  {
    description: "pay the utilities",
    markAsDone: false,
    index: "def123",
  },
  { description: "get ripped", markAsDone: true, index: "ghi123" },
];
//TODO: Add this handler once I understand how to use state
// const handleCheckboxChange = (index: number) => {
//   const updatedTodoDataList = [...todoDataList];
//   updatedTodoDataList[index].markAsDone =
//     !updatedTodoDataList[index].markAsDone;
// };

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
          <ToDoList key={index} {...item}></ToDoList>
        ))}
      </div>
    </>
  );
}

export default App;
