import {
  TRouteUnionSidebarArray,
  TSidebarItems,
} from "../interface/route.interface";
import { NavLink } from "react-router-dom";

const DynamicSidebarItemsCreator = (Arr: TRouteUnionSidebarArray[]) => {
  const newArr = Arr.reduce((acc: TSidebarItems[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
      });
    }

    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => ({
          key: child.name,
          label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
        })),
      });
    }

    return acc;
  }, []);

  // Returning the new array as [{ key : string, label : <NavLink /> }]
  return newArr;
};

export default DynamicSidebarItemsCreator;
