export interface Strategy {
  auth(userName: string): string;
}
