import { TRoute, TUserPaths } from "../interface/route.interface";

// Programmatic Function for creating routes array as per given array of dedicated section

const routesGenerator = (paths: TUserPaths[]) => {
  const routes = paths.reduce((acc: TRoute[], item) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }

    if (item.children) {
      item.children.forEach((child) => {
        acc.push({
          path: child.path!,
          element: child.element,
        });
      });
    }

    return acc;
  }, []);

  // Returning the new array as [{ path : string, element : ReactNode }]
  return routes;
};

export default routesGenerator;
