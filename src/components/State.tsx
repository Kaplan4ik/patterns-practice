import { User } from '../state/user/user';
import { BannedState } from '../state/userStates/bannedState';
import { LogInState } from '../state/userStates/logInState';
import { LogOutState } from '../state/userStates/logOutState';

export const State = () => {
  const logIn = new LogInState();
  const logOut = new LogOutState();
  const banned = new BannedState();
  const user = new User(logIn, logOut, banned);

  const logInUserHandler = () => {
    user.logIn();
  };

  const logoutUserHandler = () => {
    user.logOut();
  };

  const bannedUserHandler = () => {
    user.setState(banned);
  };

  const removeBanHandler = () => {
    user.setState(logOut);
  };

  return (
    <>
      <button onClick={logInUserHandler}>Log In</button>
      <button onClick={logoutUserHandler}>Log Out</button>
      <button onClick={bannedUserHandler}>Banned</button>
      <button onClick={removeBanHandler}>Remove Ban</button>
    </>
  );
};
