import { ReactNode } from "react";

export type TRoute = {
  path: string;
  element?: ReactNode;
  children?: TRoute[];
};

export type TSidebarItems =
  | {
      key: string | undefined;
      label: ReactNode;
      children?: TSidebarItems[];
    }
  | undefined;

export type TUserPaths = {
  name?: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPaths[];
};
