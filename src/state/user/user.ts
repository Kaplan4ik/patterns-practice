import { UserState } from '../interfaces/UserState';

export class User {
  private currentState: UserState;
  constructor(
    private logInState: UserState,
    private logOutState: UserState,
    private bannedState: UserState
  ) {
    this.currentState = logOutState;
  }

  public logIn(): void {
    this.currentState.userLogIn(this);
  }

  public logOut(): void {
    this.currentState.userLogOut(this);
  }

  public setState(state: UserState): void {
    this.currentState = state;
  }

  public getLogInState(): UserState {
    return this.logInState;
  }

  public getLogOutState(): UserState {
    return this.logOutState;
  }

  public getBannedState(): UserState {
    return this.bannedState;
  }
}
