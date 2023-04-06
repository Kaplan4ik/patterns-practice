import { BaseAuth } from '../strategy/components/baseAuth';
import { GluuAuth } from '../strategy/components/GluuAuth';
import { GoogleAuth } from '../strategy/components/googleAuth';

export const Strategy = () => {
  const userName = 'Test User';
  const googleAuth = new BaseAuth(new GoogleAuth());
  const result = googleAuth.authorize(userName);
  console.group('Strategy.tsx', 'Strategy', '6');
  console.log(result);
  console.groupEnd();

  const gluuAuth = new BaseAuth(new GluuAuth());
  const result1 = gluuAuth.authorize(userName);
  console.group('Strategy.tsx', 'Strategy', '12');
  console.log(result1);
  console.groupEnd();
  return <></>;
};
