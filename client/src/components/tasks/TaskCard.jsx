// client-jsx/src/components/tasks/TaskCard.jsx
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Routes from '@/routes';

const TaskCard = ({ task }) => {
  const { t } = useTranslation();
  return (
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-bold mb-2">{task.title}</h3>
      <p className="text-gray-700 mb-4 line-clamp-3">{task.description}</p>
      <Link 
        to={Routes.taskDetails(task.slug)} 
        className="text-blue-500 hover:underline font-semibold"
      >
        {t('taskList.viewDetails')}
      </Link>
    </div>
  );
};

export default TaskCard;