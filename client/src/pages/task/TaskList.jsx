import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '@/api/axios';
import { useTranslation } from 'react-i18next';
import Routes from '@/routes';
import Header from '@/layouts/Header';
import TaskCard from '@/components/tasks/TaskCard';

const TaskList = () => {
  const { t } = useTranslation();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api.get('/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-extrabold mb-6 text-center">{t('taskList.title')}</h2>
        {tasks.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-gray-300 rounded-lg">
            <p className="text-lg text-gray-600 mb-4">{t('taskList.noTasks')}</p>
            <Link 
              to={Routes.createTask} 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
            >
              {t('taskList.createOne')}
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tasks.map(task => (
              <TaskCard key={task._id} task={task} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default TaskList;
