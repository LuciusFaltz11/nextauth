import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { validateUserPermissions } from '../utils/validateUserPermissions';

type UseCaParams = {
  permissions?: string[];
  roles?: string[];
};
export function useCan({ permissions, roles }: UseCaParams) {
  const { user, isAuthenticated } = useContext(AuthContext);

  // HOOKS SÓ FUNCIONAM DENTRO DE COMPONENTES

  if (!isAuthenticated) {
    return false;
  }

  const userHasValidPermissions = validateUserPermissions({
    user,
    permissions,
    roles,
  });

  return userHasValidPermissions;
}
