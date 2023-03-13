export class SingletonService {
  private static instance: SingletonService;
  private userName: string;
  private constructor() {}

  public static getInstance(): SingletonService {
    if (!SingletonService.instance) {
      SingletonService.instance = new SingletonService();
    }

    return SingletonService.instance;
  }

  public setUserName(userName: string) {
    this.userName = userName;
  }
}
