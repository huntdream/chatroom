import { lazy } from "react";

/**
 * route config
 * path
 * name
 * component
 * exact
 * children
 */

const routes = [
  {
    path: "/",
    name: "Index",
    exact: true,
    component: lazy(() => import("../containers/Index/index"))
  }
];

export default routes;
