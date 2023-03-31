import { UserRole } from '../interfaces/UserRole';

export class AdminUser implements UserRole {
  public getUserRole(): string {
    return 'I am Admin User';
  }
}
