import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Routes from '@/routes';

const Header = () => {
  const { t } = useTranslation();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate(Routes.login);
  };

  return (
    <header className="bg-blue-700 text-white py-4 px-8 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-extrabold">{t('header.title')}</h1>
      <div className="flex items-center space-x-4">
        {user && (
          <span className="text-lg font-medium">{t('header.greeting', { name: user.name })}</span>
        )}
        <Link 
          to={Routes.createTask} 
          className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded transition-colors duration-200"
        >
          {t('header.createTask')}
        </Link>
        <button 
          onClick={handleLogout} 
          className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded transition-colors duration-200"
        >
          {t('header.logout')}
        </button>
      </div>
    </header>
  );
};

export default Header;
