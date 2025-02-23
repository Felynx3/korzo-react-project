import type { ReactNode, ReactElement } from 'react';

import { useNavigate } from 'react-router-dom';
import { useAuth } from '@workos-inc/authkit-react';

interface ProtectedRouteProps {
  children: ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps): ReactElement | null {
  const { isLoading, user } = useAuth();

  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    navigate('/sign-in'); // TODO: magic string

    return null;
  }

  return <>{children}</>;
}
