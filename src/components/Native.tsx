import { Observable } from './native/observable';

export const Native = () => {
  const observable = new Observable(0);

  const onClickSubscribe = () => {
    setInterval(() => {
      observable.set(Date.now());
    }, 1000);
  };
  observable.subscribe(
    (currentState: any) => {
      console.group('Native.tsx', '', '10');
      console.log(currentState);
      console.groupEnd();
    },
    (newState: any) => {
      console.group('Native.tsx', '', '14');
      console.log(newState);
      console.groupEnd();
    }
  );

  return <button onClick={onClickSubscribe}>Subscribe</button>;
};
