import { useEffect } from 'react';
import { Autopilot } from '../decorators/classes/autopilot';
import { Bmw } from '../decorators/classes/bmw';
import { Navigation } from '../decorators/classes/navigation';

export const Decorators = () => {
  const bmw = new Bmw();

  const carWithBoth = () => {
    const carWithAutopilot = new Autopilot(bmw);
    const carWithNavigation = new Navigation(carWithAutopilot);
    console.group('Decorators.tsx', 'carWithBoth', '12');
    console.log(carWithNavigation.operation());
    console.groupEnd();
  };
  const carWithOne = () => {
    const carWithAutopilot = new Autopilot(bmw);
    console.group('Decorators.tsx', 'Decorators', '9');
    console.log(carWithAutopilot.operation());
    console.groupEnd();
  };

  carWithBoth();
  carWithOne();
  return <></>;
};
