import { UserType } from '../enums/factory';
import { UserFactory } from '../factory/factory';

export const Factory = () => {
  const factory = new UserFactory();
  const user = factory.create(UserType.User);
  const admin = factory.create(UserType.Admin);
  const superAdmin = factory.create(UserType.SuperAdmin);

  return (
    <>
      {user}
      {admin}
      {superAdmin}
    </>
  );
};
