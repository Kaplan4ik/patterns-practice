import { UserState } from '../interfaces/UserState';
import { User } from '../user/user';

export class BannedState implements UserState {
  userLogIn(context: User): void {
    console.group('bannedState.ts', 'userLogIn', '6');
    console.log('User can not be log in because banned');
    console.groupEnd();
  }

  userLogOut(context: User): void {
    console.group('bannedState.ts', 'userLogOut', '12');
    console.log('user Log out and banned');
    console.groupEnd();
  }
}
