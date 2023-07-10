import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function VisitorGuard({ element }) {
  const { user } = useContext(UserContext);

  if (!user) {
    return element;
  } else {
    return <Navigate to="/" />;
  }
}

export default VisitorGuard;
