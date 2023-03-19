import { Permission } from '../interfaces/builder';
import { UserPermission } from './permission';

export class PermissionBuilder implements Permission {
  private userPermission: UserPermission;

  constructor() {
    this.reset();
  }
  public setFullAccessPermission(): void {
    this.setWritePermission();
    this.userPermission.permission.push('Admin Permission');
  }

  public setReadPermission(): void {
    this.userPermission.permission.push('Only Read Permission');
  }

  public setWritePermission(): void {
    this.setReadPermission();
    this.userPermission.permission.push('Write Permission');
  }

  public getUserPermission(): UserPermission {
    const userPermission = this.userPermission;
    this.reset();

    return userPermission;
  }

  private reset(): void {
    this.userPermission = new UserPermission();
  }
}
