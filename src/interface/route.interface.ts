import { ReactNode } from "react";

export interface TRoute {
  path: string;
  element?: ReactNode;
  children?: TRoute[];
}

export interface TSidebarItems {
  key: string;
  label: ReactNode;
  children?: TSidebarItems[];
}

export interface TUserPaths {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPaths[];
}
