import { AbstractUserFactory } from '../interfaces/AbstractUserFactory';
import { UserRole } from '../interfaces/UserRole';
import { GuestUser } from '../users/guestUser';

export class GuestUserFactory implements AbstractUserFactory {
  public createUserRole(): UserRole {
    return new GuestUser();
  }
}
