import { PermissionBuilder } from '../builder/builder';

export const UserPermissionListener = () => {
  const userWithWritePermission = () => {
    const builder = new PermissionBuilder();
    builder.setReadPermission();

    return builder.getUserPermission().getListPermission();
  };

  const adminUser = () => {
    const builder = new PermissionBuilder();
    builder.setWritePermission();

    return builder.getUserPermission().getListPermission();
  };

  const superAdmin = () => {
    const builder = new PermissionBuilder();
    builder.setFullAccessPermission();

    return builder.getUserPermission().getListPermission();
  };

  const user = userWithWritePermission();
  const admin = adminUser();
  const adminGod = superAdmin();

  console.group('UserPermissionListener.tsx', 'UserPermissionListener', '29');
  console.log(user);
  console.log(admin);
  console.log(adminGod);
  console.groupEnd();

  return <></>;
};
