import { CarDecorator } from './carDecorator';

export class Autopilot extends CarDecorator {
  public operation(): string {
    return `Create autopilot to (${super.operation()})`;
  }
}
