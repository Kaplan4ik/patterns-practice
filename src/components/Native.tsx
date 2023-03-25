import { Observable } from './native/observable';
export const Native = () => {
  const observable = new Observable();
  console.group('Native.tsx', 'Native', '3');
  console.log(1);
  console.groupEnd();
  observable.subscribe((data: any) => {
    console.log(data.detail);
  });
  console.group('Native.tsx', 'Native', '10');
  console.log(2);
  console.groupEnd();

  const onClickHandler = () => {
    console.group('Native.tsx', 'onClickHandler', '15');
    console.log(3);
    console.groupEnd();
    observable.getData();
    console.group('Native.tsx', 'onClickHandler', '19');
    console.log(4);
    console.groupEnd();
  };

  return <button onClick={onClickHandler}>Subscribe</button>;
};
