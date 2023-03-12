import { RouteObject } from "react-router-dom";
import Pages from "../pages";

export type RouterGroupType =
  | "Creational"
  | "Structural"
  | "Behavioural"
  | "Ungrouped";

export type RouteType = Required<
  Pick<RouteObject, "path" | "element" | "id"> & {
    routerGroup: RouterGroupType;
  }
>;

export const ROUTES: RouteType[] = [
  {
    path: "/",
    element: <Pages.HomePage />,
    id: "Home",
    routerGroup: "Ungrouped",
  },
];

export default ROUTES;
