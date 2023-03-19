import { Observable } from './native/observable';

export const Native = () => {
  const observable = new Observable(0);

  const onClickSubscribe = () => {
    observable.set(Date.now());
  };
  observable.subscribe((state: any) => console.log(state));

  return <button onClick={onClickSubscribe}>Subscribe</button>;
};
