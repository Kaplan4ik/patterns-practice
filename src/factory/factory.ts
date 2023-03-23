import { UserType } from '../enums/factory';
import { User } from './user';

export class UserFactory {
  public create(userType: UserType): User {
    let user: User;
    switch (userType) {
      case UserType.User:
        user = new User('User', 'Read');
        break;
      case UserType.Admin:
        user = new User('Admin', 'Write');
        break;
      case UserType.SuperAdmin:
        user = new User('Super Admin', 'Read-Write');
        break;
    }

    return user;
  }
}
