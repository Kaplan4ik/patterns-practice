import { BaseRequest } from './baseRequest';
import { Adaptee } from './specificRequest';

export class TransformedRequest extends BaseRequest {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    super();
    this.adaptee = adaptee;
  }

  public request(): string {
    const result = this.adaptee.specificRequest().split('').reverse().join('');
    return `Adapter: (TRANSLATED) ${result}`;
  }
}
