import { UserRole } from '../interfaces/UserRole';

export class GuestUser implements UserRole {
  public getUserRole(): string {
    return 'I am Guest User';
  }
}
