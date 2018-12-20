import { lazy } from "react";

/**
 * route config
 * path
 * name
 * component
 * children
 */

const routes = [
  {
    path: "/",
    name: "Index",
    component: lazy(() => import("../containers/Index/index"))
  }
];

export default routes;
