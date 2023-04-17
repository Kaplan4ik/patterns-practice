import { Cars } from '../interfaces/cars';

export class CarDecorator implements Cars {
  protected cars: Cars;

  constructor(cars: Cars) {
    this.cars = cars;
  }
  public operation(): string {
    return this.cars.operation();
  }
}
