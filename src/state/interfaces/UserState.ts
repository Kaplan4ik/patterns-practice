import { User } from '../user/user';

export interface UserState {
  userLogIn(context: User): void;
  userLogOut(context: User): void;
}
