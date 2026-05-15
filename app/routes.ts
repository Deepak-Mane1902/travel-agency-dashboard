import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route("/", "routes/admin/admin-layout.tsx", [
    route("dashboard", "routes/admin/dashboard.tsx"),
    route("all-users", "routes/admin/allUsers.tsx"),
  ]),
] satisfies RouteConfig;