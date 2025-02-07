import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskList from '@/pages/task/TaskList';
import TaskDetails from '@/pages/task/TaskDetails';
import CreateTask from '@/pages/task/CreateTask';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import RoutesConfig from '@/routes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={RoutesConfig.home} element={<TaskList />} />
        <Route path="/task/:slug" element={<TaskDetails />} />
        <Route path={RoutesConfig.createTask} element={<CreateTask />} />
        <Route path={RoutesConfig.login} element={<Login />} />
        <Route path={RoutesConfig.register} element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
