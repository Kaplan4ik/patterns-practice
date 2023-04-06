import { Strategy } from '../interfaces/strategy';

export class BaseAuth {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  public authorize(userName: string): string {
    return this.strategy.auth(userName);
  }
}
