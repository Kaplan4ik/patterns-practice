import { Observable } from './native/observable';
export const Native = () => {
  const observable = new Observable();

  observable.subscribe((data: any) => {
    console.log('Received data:', data);
  });

  const onClickHandler = () => {
    console.group('Native.tsx', 'onClickHandler', '10');
    console.log(1);
    console.groupEnd();
    observable.notify('Hello world!');
    console.group('Native.tsx', 'onClickHandler', '14');
    console.log(2);
    console.groupEnd();
  };

  return <button onClick={onClickHandler}>Subscribe</button>;
};
