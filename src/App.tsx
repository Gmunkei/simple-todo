import "./App.css";
import { Todo } from "./models/todo";
import ToDoList from "./ui/components/ToDoList";

const todoDataList: Todo[] = [
  { description: "mow the lawn", isComplete: false, id: "abc123" },
  {
    description: "pay the utilities",
    isComplete: false,
    id: "def123",
  },
  { description: "get ripped", isComplete: true, id: "ghi123" },
];
//TODO: Add this handler once I understand how to use state
// const handleCheckboxChange = (index: number) => {
//   const updatedTodoDataList = [...todoDataList];
//   updatedTodoDataList[index].markAsDone =
//     !updatedTodoDataList[index].markAsDone;
// };

const todoContainer: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  border: "0px solid #0085f2",
};

function App() {
  return (
    <div style={todoContainer}>
      {todoDataList.map((item) => (
        <ToDoList
          key={item.id}
          markAsDone={() => console.log(item)}
          {...item}
        />
      ))}
    </div>
  );
}

export default App;
