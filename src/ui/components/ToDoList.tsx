import { ToDoProps } from "myTypes";

const todoItem = {
  display: "flex",
  flexDirection: "row",
  gap: "4px",
  padding: "16px",
  margin: "0px",
  borderRadius: "5px",
  border: "1px solid #0085f2",
  backgroundColor: "#f9f9fb",
};

const ToDoItem = (props: ToDoProps) => {
  return (
    <>
      <div style={todoItem}>
        <input type="checkbox" checked={props.markAsDone}></input>
        <div>{props.description}</div>
      </div>
    </>
  );
};

export default ToDoItem;
