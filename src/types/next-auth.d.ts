import { type User } from "next-auth";
import { JWT } from "next-auth/jwt";
import { type userRolesEnum } from '../server/db/schema/users';

export type ExtendedUser = User & {
  id: string;
  role: userRolesEnum;
};

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: userRolesEnum;
  }
}

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}