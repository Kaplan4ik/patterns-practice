import { AbstractUserFactory } from '../abstractFactory/interfaces/AbstractUserFactory';
import { UserRole } from '../abstractFactory/interfaces/UserRole';
import { AdminUserFactory } from '../abstractFactory/userFactory/adminUserFactory';
import { GuestUserFactory } from '../abstractFactory/userFactory/guestUserFactory';

export const AbstractFactory = () => {
  const guestFactory: AbstractUserFactory = new GuestUserFactory();
  const guestUser: UserRole = guestFactory.createUserRole();

  const adminFactory: AbstractUserFactory = new AdminUserFactory();
  const adminUser: UserRole = adminFactory.createUserRole();

  return <></>;
};
