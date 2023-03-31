import { UserState } from '../interfaces/UserState';
import { User } from '../user/user';

export class LogInState implements UserState {
  userLogIn(context: User): void {
    console.group('logInState.ts', 'userLogIn', '6');
    console.log('User LogIn now');
    console.groupEnd();
  }

  userLogOut(context: User): void {
    console.group('logInState.ts', 'userLogOut', '11');
    console.log('User logOut');
    console.groupEnd();
    context.setState(context.getLogOutState());
  }
}
