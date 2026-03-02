import ToDoItem from "./ToDoItem";

function ToDoList({ tasks, deleteTask, toggleComplete, editTask }) {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <ToDoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          editTask={editTask}
        />
      ))}
    </ul>
  );
}

export default ToDoList;