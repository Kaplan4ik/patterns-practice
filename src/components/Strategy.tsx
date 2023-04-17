import { BaseAuth } from '../strategy/components/baseAuth';
import { GluuAuth } from '../strategy/components/GluuAuth';
import { GoogleAuth } from '../strategy/components/googleAuth';

export const Strategy = () => {
  const userName = 'Test User';
  const googleAuth = new BaseAuth(new GoogleAuth());
  const result = googleAuth.authorize(userName);

  const gluuAuth = new BaseAuth(new GluuAuth());
  const result1 = gluuAuth.authorize(userName);
  return <></>;
};
