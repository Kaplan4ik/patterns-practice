import { CarDecorator } from './carDecorator';

export class Navigation extends CarDecorator {
  public operation(): string {
    return `Create navigation to (${super.operation()})`;
  }
}
