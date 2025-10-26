import StudentForm from "./forms/StudentForm";
import StudentsTable from "./students/StudentsTable";
import TodoList from "./todos/TodoList";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>This is App</h1>

      <ul>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/todolist">Todo list</Link>
        </li>
        <li>
          <Link to="/studentslist">All Students</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/recipes">Recipes</Link>
        </li>
      </ul>
      <div className="border border-5 p-2 m-2 border-success">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
