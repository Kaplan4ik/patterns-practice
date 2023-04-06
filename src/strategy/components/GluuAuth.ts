import { Strategy } from '../interfaces/strategy';

export class GluuAuth implements Strategy {
  public auth(userName: string): string {
    //Do logic with authorize on Gluu side
    return `${userName} authorize with Gluu`;
  }
}
