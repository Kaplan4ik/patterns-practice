import styled from 'styled-components';
import { SingletonService } from '../singletone/singleton-service';
import { baseTheme } from '../styled/theme';

const Button = styled('button')<{ pt?: string }>`
  padding-top: ${({ pt = 2 }) => pt + 'px'};
`;
export const Singleton = () => {
  const singletonService = SingletonService.getInstance();

  const onSubmitHandler = (event: any) => {
    event.preventDefault();
    const userName: string = event.target[0].value;

    singletonService.setUserName(userName);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" />

      <Button pt={baseTheme.size.medium} type="submit">
        Set User Name
      </Button>
    </form>
  );
};
