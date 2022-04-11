import { Navigate, Route, Routes } from 'react-router-dom';

import LayoutPage from './pages/LayoutPage';

import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ContactsPage from './pages/ContactsPage';

import PrivateRoute from './shared/components/PrivateRoute';
import PublicRoute from './shared/components/PublicRoute';

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route index element={<HomePage />} />
        <Route element={<PublicRoute />}>
          <Route path="signup" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
