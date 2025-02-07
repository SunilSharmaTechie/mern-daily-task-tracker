import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '@/api/axios';
import Header from '@/layouts/Header';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

const CreateTask = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    details: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) {
      setError(`${t('createTask.formTitle')} & ${t('createTask.formDescription')} ${t('error.fieldRequired')}`);
      return;
    }
    try {
      await api.post('/tasks', formData);
      toast.success(t('createTask.success') || 'Task created successfully.');
      navigate('/');
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || `${t('createTask.submit')} failed`);
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-center">{t('createTask.title')}</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">{t('createTask.formTitle')}</label>
            <input 
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder={t('createTask.formTitle')}
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">{t('createTask.formDescription')}</label>
            <textarea 
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder={t('createTask.formDescription')}
              rows="4"
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">{t('createTask.formDetails')}</label>
            <textarea 
              name="details"
              value={formData.details}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder={t('createTask.formDetails')}
              rows="4"
            ></textarea>
          </div>
          <button 
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded transition-colors duration-200"
          >
            {t('createTask.submit')}
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateTask;
