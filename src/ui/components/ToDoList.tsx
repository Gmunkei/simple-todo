import { Todo } from "../../models/todo";

const todoItem: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  gap: "4px",
  padding: "16px",
  margin: "0px",
  borderRadius: "5px",
  border: "1px solid #0085f2",
  backgroundColor: "#f9f9fb",
};

type TodoProps = Todo & {
  markAsDone: () => void;
};

const ToDoItem = ({
  description,
  id,
  isComplete,
  markAsDone,
  dateComplete,
  dateCreated,
}: TodoProps) => {
  return (
    <div style={todoItem}>
      <input type="checkbox" checked={isComplete}></input>
      <div>{description}</div>
      <button onClick={markAsDone}>Done</button>
    </div>
  );
};

export default ToDoItem;
