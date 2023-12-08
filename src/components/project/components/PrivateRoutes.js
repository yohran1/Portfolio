import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';

export default function PrivateRoute({ path: Path, element: Component, ...rest }) {
  const isAuthenticated = useSelector(state => state.login.isAuthenticated);

  return (
    <Route path={Path} {...rest} element={({ location }) => 
    
         isAuthenticated ? <Component /> : 
        (
          <Navigate to="/projeto/login" state={{ from: location }} replace={true} />
        )
    
      }
    />
  );
}
