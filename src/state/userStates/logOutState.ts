import { UserState } from '../interfaces/UserState';
import { User } from '../user/user';

export class LogOutState implements UserState {
  userLogIn(context: User): void {
    context.setState(context.getLogInState());
    console.group('logOutState.ts', 'userLogIn', '7');
    console.log('User Log In');
    console.groupEnd();
  }

  userLogOut(context: User): void {
    console.group('logOutState.ts', 'userLogOut', '13');
    console.log('user Log Out now');
    console.groupEnd();
  }
}
