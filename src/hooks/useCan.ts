import { useContext } from 'react';
import { AuthContext } from '~/contexts/AuthContext';

type UseCanProps = {
  role?: number;
  permission?: number;
};

export function useCan({ role, permission }: UseCanProps) {
  const { user, isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return false;
  }

  if (role) {
    const hasRole = user?.role !== Number(role);

    if (!hasRole) {
      return false;
    }
  }

  if (permission) {
    const hasPermission = user?.permission === Number(permission);

    if (!hasPermission) {
      return false;
    }
  }

  return true;
}
