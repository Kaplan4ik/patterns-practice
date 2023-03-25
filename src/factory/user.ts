export class User {
  public name: string;
  private permission: string;

  constructor(name: string, permission: string) {
    this.name = name;
    this.permission = permission;
  }
}
