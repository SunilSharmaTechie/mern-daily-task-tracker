import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '@/api/axios';
import Routes from '@/routes';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

const Register = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/auth/register', formData);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      toast.success(t('register.success') || 'Registration successful');
      navigate(Routes.home);
    } catch (err) {
      console.error(err);
      const errorMsg = err.response?.data?.message || 'Registration failed';
      setError(errorMsg);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">{t('register.title')}</h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">{t('register.name')}</label>
            <input 
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder={t('register.name')}
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">{t('register.email')}</label>
            <input 
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder={t('register.email')}
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">{t('register.password')}</label>
            <input 
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder={t('register.password')}
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded transition-colors duration-200"
          >
            {t('register.submit')}
          </button>
        </form>
        <p className="text-center mt-4">
          {t('register.alreadyAccount')}{' '}
          <Link to={Routes.login} className="text-blue-600 hover:underline">
            {t('login.title')}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
