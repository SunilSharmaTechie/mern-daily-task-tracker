import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '@/api/axios';
import Header from '@/layouts/Header';
import { useTranslation } from 'react-i18next';

const TaskDetails = () => {
  const { t } = useTranslation();
  const { slug } = useParams();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/tasks/${slug}`)
      .then(response => {
        setTask(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching task:', error);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl text-gray-600">{t('taskDetails.loading')}</p>
      </div>
    );
  }

  if (!task) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-xl text-red-500 mb-4">{t('taskDetails.notFound')}</p>
        <Link to="/" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
          {t('taskDetails.back')}
        </Link>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow-2xl rounded-lg p-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">{task.title}</h1>
          <p className="text-lg text-gray-700 mb-6">{task.description}</p>
          {task.details && (
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{t('taskDetails.details')}</h2>
              <p className="text-gray-700 leading-relaxed">{task.details}</p>
            </div>
          )}
          <Link 
            to="/" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition-colors duration-200"
          >
            {t('taskDetails.back')}
          </Link>
        </div>
      </div>
    </>
  );
};

export default TaskDetails;
