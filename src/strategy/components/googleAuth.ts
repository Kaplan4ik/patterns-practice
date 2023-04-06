import { Strategy } from '../interfaces/strategy';

export class GoogleAuth implements Strategy {
  public auth(userName: string): string {
    //Do logic with authorize on Google side
    return `${userName} authorize with google`;
  }
}
