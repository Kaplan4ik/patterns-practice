import { UserRole } from './UserRole';

export interface AbstractUserFactory {
  createUserRole(): UserRole;
}
