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

export interface TRouteUnionSidebarArray {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TRouteUnionSidebarArray[];
}
