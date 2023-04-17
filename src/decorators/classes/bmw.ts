import { Cars } from '../interfaces/cars';

export class Bmw implements Cars {
  public operation(): string {
    return 'Bmw';
  }
}
