import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';

export default function PrivateRoute({ children, ...rest }) {
  const isAuthenticated = useSelector(state => state.login.isAuthenticated);

  return (
    <Route {...rest} element={({ location }) => 
    
         isAuthenticated ? (children) : 
        (
          <Navigate to="/projeto/login" state={{ from: location }} replace={true} />
        )
    
      }
    />
  );
}
