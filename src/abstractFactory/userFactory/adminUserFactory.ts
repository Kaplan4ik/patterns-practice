import { AbstractUserFactory } from '../interfaces/AbstractUserFactory';
import { UserRole } from '../interfaces/UserRole';
import { AdminUser } from '../users/adminUser';

export class AdminUserFactory implements AbstractUserFactory {
  public createUserRole(): UserRole {
    return new AdminUser();
  }
}
